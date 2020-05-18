const express = require("express");
const graphqlHttp = require("express-graphql");
const schema = require("../schema/schema");

const router = express.Router();

router.use(
  "/products",
  graphqlHttp({
    schema,
    graphiql: true,
  })
);

module.exports = (app) => app.use(router);
