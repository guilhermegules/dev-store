const {
  GraphQLID,
  GraphQLString,
  GraphQLList,
  GraphQLObjectType,
  GraphQLNonNull,
} = require("graphql");
const Product = require("../models/product");
const productType = require("./type");

const Query = new GraphQLObjectType({
  name: "Query",
  fields: () => ({
    products: {
      type: GraphQLList(productType),
      resolve: () => Product.find({}),
    },
    product: {
      type: productType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
      },
      resolve: (parent, args) => Product.findById(args.id),
    },
    productTypeQuery: {
      type: GraphQLList(productType),
      args: {
        type: { type: GraphQLNonNull(GraphQLString) },
      },
      resolve: (parent, args) => Product.find({ type: args.type }),
    },
  }),
});

module.exports = Query;
