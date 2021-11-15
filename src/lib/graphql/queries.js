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

export const LIST_QUEUED_SONGS = gql`
  query listQueuedSongs {
    queue @client {
      id
      title
      artist
      thumbnail
      url
      duration
    }
  }
`;
export const QUEUE_SONG = gql`
  query queueSong(
    $id: uuid!
    $title: String!
    $artist: String!
    $url: String!
    $thumbnail: String!
    $duration: Float!
  ) {
    queue @client {
      id
      title
      artist
      thumbnail
      url
      duration
    }
  }
`;
