import { ApolloServer, gql } from "apollo-server";

let Tweets = [
  {
    id: "1",
    text: "Hello World",
    userId: "1",
  },
  {
    id: "2",
    text: "Bye World",
    userId: "1",
  },
];

const Users = [
  {
    id: "1",
    firstName: "John",
    lastName: "Doe",
  },
  {
    id: "2",
    firstName: "Jane",
    lastName: "Doe",
  },
];

const typeDefs = gql`
  type User {
    id: ID!
    firstName: String!
    lastName: String!
    fullName: String!
  }
  type Tweet {
    id: ID
    text: String
    author: User
  }
  type Movie {
    id: Int!
    url: String!
    imdb_code: String!
    title: String!
    title_english: String!
    title_long: String!
    slug: String!
    year: Int!
    rating: Float!
    runtime: Float!
    genres: [String]!
    summary: String!
    description_full: String!
    synopsis: String!
    yt_trailer_code: String!
    language: String!
    mpa_rating: String!
    background_image: String!
    background_image_original: String!
    small_cover_image: String!
    medium_cover_image: String!
    large_cover_image: String!
  }
  type Query {
    """
    Returns all Users
    """
    allUsers: [User!]!
    """
    Returns all Movies
    """
    allMovies: [Movie!]!
    """
    Returns all Tweets
    """
    allTweets: [Tweet!]!
    """
    Returns a Tweet if it exists, else returns null
    """
    tweet(id: ID!): Tweet
  }
  type Mutation {
    """
    Creates a new Tweet
    """
    createTweet(text: String!, userId: ID!): Tweet
    """
    Deleted a Tweet if it exists, else returns false
    """
    deleteTweet(id: ID!): Boolean
  }
`;

const resolvers = {
  Query: {
    allUsers: () => {
      return Users;
    },
    allTweets: () => {
      return Tweets;
    },
    allMovies: () => {
      return fetch("https://yts.mx/api/v2/list_movies.json")
        .then((res) => res.json())
        .then((res) => res.data.movies);
    },
    tweet: (_, { id }) => {
      return Tweets.find((tweet) => tweet.id === id);
    },
  },
  Mutation: {
    createTweet: (_, { text, userId }) => {
      const newTweet = {
        id: Tweets.length + 1,
        userId,
        text,
      };
      Tweets.push(newTweet);
      return newTweet;
    },
    deleteTweet: (_, { id }) => {
      const tweetIndex = Tweets.findIndex((tweet) => tweet.id === id);
      if (tweetIndex === -1) return false;
      Tweets.splice(tweetIndex, 1);
      return true;
    },
  },
  User: {
    fullName: ({ firstName, lastName }) => {
      return `${firstName} ${lastName}`;
    },
  },
  Tweet: {
    author: ({ userId }) => {
      return Users.find((user) => user.id === userId);
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
