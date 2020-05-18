import React from "react";
import Product from "../Product";

const Products = ({ data, loading, error }) => {
  if (loading) return <p>Carregando produtos...</p>;
  if (error)
    return (
      <p>
        Ocorreu algum erro
        <span role="img" aria-label="Fearfull face">
          &#128552;
        </span>
      </p>
    );

  const { products, productTypeQuery } = data;

  return (
    <>
      {products
        ? products.map((product) => <Product product={product} />)
        : productTypeQuery.map((product) => <Product product={product} />)}
    </>
  );
};

export default Products;
