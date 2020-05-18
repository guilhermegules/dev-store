import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "http://localhost:5555/products"
})

export default client;
