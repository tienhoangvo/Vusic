import gql from "graphql-tag";

export const WATCH_SONGS = gql`
  subscription watchSongs {
    songs(order_by: { createdAt: desc }) {
      id
      title
      artist
      url
      thumbnail
      duration
      createdAt
    }
  }
`;
