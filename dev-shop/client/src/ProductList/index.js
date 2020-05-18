import React, { useContext } from "react";
import { TypeContext } from "../context/TypeContext";
import Products from "../Products";
import { getProductByType, getProducts } from "../queries/queries";
import "./style.css";
import { useQuery } from "react-apollo";

const ProductList = () => {
  const [type] = useContext(TypeContext);
  const {
    data: products,
    error: productsQueryError,
    loading: productsQueryLoading,
  } = useQuery(getProducts);
  const {
    data: productTypeQuery,
    error: productsByTypeQueryError,
    loading: productsByTypeQueryLoading,
  } = useQuery(getProductByType, {
    variables: { type: type },
  });

  return (
    <section className="product-list">
      {type === "" ? (
        <Products
          data={products}
          error={productsQueryError}
          loading={productsQueryLoading}
        />
      ) : (
        <Products
          data={productTypeQuery}
          error={productsByTypeQueryError}
          loading={productsByTypeQueryLoading}
        />
      )}
    </section>
  );
};

export default ProductList;
