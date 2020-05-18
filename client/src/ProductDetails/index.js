import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons";

import "./style.css";
import { Link } from "react-router-dom";
import formatNumber from "../formatter/formatter";
import productsUrl from "../configs/configs";

const ProductDetails = ({ location }) => {
  if (location.info === undefined) {
    return (
      <div>
        <nav>
          <Link to="/">
            <FontAwesomeIcon icon={faArrowCircleLeft} />
          </Link>
        </nav>
        <div className="error-message">
          <p>Nenhum produto diponivel no momento D:</p>
        </div>
      </div>
    );
  }
  const { name, img, price, description } = location.info;
  return (
    <section>
      <nav>
        <Link to="/">
          <FontAwesomeIcon icon={faArrowCircleLeft} />
        </Link>
      </nav>
      <div className="product-details">
        <div className="product-image">
          <img src={productsUrl(img)} alt={description} />
        </div>
        <div className="product-details-info">
          <h2 className="product-title">{name}</h2>
          <p>{description}</p>
          <p>Preço: {formatNumber(price)}</p>
          <button className="product-btn">Comprar</button>
          <p>
            Ao comprar qualquer produto da DEV Store, você estará adquirindo
            produtos de altissíma qualidade e feitos com muito carinho{" "}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
