import { ApolloClient, InMemoryCache, makeVar } from "@apollo/client";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const isLoggedInVar = makeVar(false);
export const tokenVar = makeVar("");

export const logUserIn = async (token) => {
  await AsyncStorage.multiSet([
    ["token", token],
  ]);

  isLoggedInVar(true);
  tokenVar(token);
};

const client = new ApolloClient({
  // create uri with local tunnel
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

export default client;
