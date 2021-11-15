import gql from "graphql-tag";

export const ADD_SONG = gql`
  mutation addSong(
    $title: String
    $artist: String
    $url: String
    $thumbnail: String
    $duration: Float
  ) {
    insert_songs_one(
      object: {
        title: $title
        artist: $artist
        url: $url
        thumbnail: $thumbnail
        duration: $duration
      }
    ) {
      id
      title
      artist
      thumbnail
      url
      duration
      createdAt
    }
  }
`;

export const ADD_OR_REMOVE_FROM_QUEUE = gql`
  mutation addOrRemoveFromQueue($input: SongInput!) {
    addOrRemoveFromQueue(input: $input) @client
  }
`;
