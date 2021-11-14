import gql from "graphql-tag";

export const LIST_SONGS = gql`
  query listSongs {
    songs {
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
