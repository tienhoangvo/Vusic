import { split, HttpLink, ApolloClient, InMemoryCache } from "@apollo/client";
import { getMainDefinition } from "@apollo/client/utilities";
import { WebSocketLink } from "@apollo/client/link/ws";
import { setContext } from "@apollo/client/link/context";

const httpLink = new HttpLink({
  uri: process.env.REACT_APP_GRAPHQL_HTTPS_ENDPOINT,
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists

  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      "x-hasura-admin-secret": process.env.REACT_APP_HASURA_ADMIN_SECRET,
    },
  };
});

const wsLink = new WebSocketLink({
  uri: process.env.REACT_APP_GRAPHQL_WSS_ENDPOINT,
  options: {
    reconnect: true,
    lazy: true,
    connectionParams: {
      headers: {
        "x-hasura-admin-secret": process.env.REACT_APP_HASURA_ADMIN_SECRET,
      },
    },
  },
});

// The split function takes three parameters:
//
// * A function that's called for each operation to execute
// * The Link to use for an operation if the function returns a "truthy" value
// * The Link to use for an operation if the function returns a "falsy" value
const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  authLink.concat(httpLink)
);

const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
});

export default client;
