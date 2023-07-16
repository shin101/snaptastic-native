import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  // uri created with local tunnel
  uri: "https://snaptastic.loca.lt/graphql",
  cache: new InMemoryCache(),
});

export default client;
