import React from "react";
import { Link } from "react-router-dom";
import productsUrl from "../configs/configs";
import formatNumber from "../formatter/formatter";
import "./style.css";

const Product = ({ product }) => (
  <div className="product" key={product.id}>
    <h2>{product.name}</h2>
    <Link
      to={{
        pathname: `/product-details/${product.id}`,
        info: { ...product },
      }}
    >
      <img src={productsUrl(product.img)} alt={product.description} />
    </Link>
    <div className="product-info">
      <p>{formatNumber(product.price)}</p>
      <button className="product-btn">Comprar</button>
    </div>
  </div>
);

export default Product;
