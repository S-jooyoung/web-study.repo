import { ApolloServer, gql } from "apollo-server";

const Tweets = [
  {
    id: 1,
    text: "Hello World",
  },
  {
    id: 2,
    text: "Bye World",
  },
];

const typeDefs = gql`
  type User {
    id: ID
    username: String
  }
  type Tweet {
    id: ID
    text: String
    author: User
  }
  type Query {
    allTweets: [Tweet]
    tweet(id: ID!): Tweet
  }
  type Mutation {
    createTweet(text: String!, userId: ID!): Tweet
    deleteTweet(id: ID!): Boolean
  }
`;

const resolvers = {
  Query: {
    allTweets: () => {
      return Tweets;
    },
    tweet: (_, { id }) => {
      return Tweets.find((tweet) => tweet.id === id);
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
