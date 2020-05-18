const {
  GraphQLString,
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLFloat
} = require("graphql");
const Product = require("../models/product");
const productType = require("./type");

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addProduct: {
      type: productType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        img: { type: new GraphQLNonNull(GraphQLString) },
        price: { type: new GraphQLNonNull(GraphQLFloat) },
        type: { type: new GraphQLNonNull(GraphQLString) },
        description: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve(parent, args) {
        const { name, img, price, type, description } = args;
        let product = new Product({
          name,
          img,
          price,
          type,
          description,
        });
        return product.save();
      },
    },
  },
});

module.exports = Mutation;
