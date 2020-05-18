import { gql } from "apollo-boost";

const getProducts = gql`
  {
    products {
      name
      img
      price
      type
      description
      id
    }
  }
`;

const getProduct = gql`
  query($id: ID!) {
    product(id: $id) {
      name
      img
      price
      type
      description
      id
    }
  }
`;

const getProductByType = gql`
  query($type: String!) {
    productTypeQuery(type: $type) {
      name
      img
      price
      type
      description
      id
    }
  }
`;

export { getProducts, getProduct, getProductByType };
