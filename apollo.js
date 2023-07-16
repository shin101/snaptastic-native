import { ApolloClient, InMemoryCache, makeVar } from "@apollo/client";

export const isLoggedInVar = makeVar(false);

const client = new ApolloClient({
  // create uri with local tunnel
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

export default client;
