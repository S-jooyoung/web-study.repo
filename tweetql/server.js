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
  type Query {
    allUsers: [User!]!
    allTweets: [Tweet!]!
    tweet(id: ID!): Tweet
  }
  type Mutation {
    createTweet(text: String!, userId: ID!): Tweet
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
