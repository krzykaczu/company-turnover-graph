"use strict";

var _graphqlYoga = require("graphql-yoga");

var _resolvers = require("./src/resolvers");

var _resolvers2 = _interopRequireDefault(_resolvers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var server = new _graphqlYoga.GraphQLServer({
    typeDefs: "./src/schema.graphql",
    resolvers: _resolvers2.default
});

server.start(function () {
    return console.log("Server is running on http://localhost:4000");
});