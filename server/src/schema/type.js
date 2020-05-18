const {
  GraphQLID,
  GraphQLString,
  GraphQLFloat,
  GraphQLObjectType,
} = require("graphql");

const productType = new GraphQLObjectType({
  name: "Product",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    img: { type: GraphQLString },
    price: { type: GraphQLFloat },
    type: { type: GraphQLString },
    description: { type: GraphQLString },
  }),
});

module.exports = productType;
