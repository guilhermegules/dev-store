import React from "react";
import { ApolloProvider } from "react-apollo";
import client from "./apollo/client";
import Header from "./Header";
import Navigation from "./Navigation";
import ProductList from "./ProductList";
import { TypeProvider } from "./context/TypeContext";

const App = () => (
  <ApolloProvider client={client}>
    <TypeProvider>
      <div className="App">
        <Header />
        <Navigation />
        <ProductList />
      </div>
    </TypeProvider>
  </ApolloProvider>
);

export default App;
