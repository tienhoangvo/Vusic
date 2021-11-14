import { render } from "react-dom";

import { ApolloProvider } from "@apollo/client";

import App from "./components/App";
import { MuiAppProvider } from "./contexts/MuiAppContext";
import client from "./lib/apollo/client";

render(
  <ApolloProvider client={client}>
    <MuiAppProvider>
      <App />
    </MuiAppProvider>
  </ApolloProvider>,
  document.getElementById("root")
);
