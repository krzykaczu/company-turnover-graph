"use strict";

var _graphqlYoga = require("graphql-yoga");

var _resolvers = require("./src/resolvers");

var _resolvers2 = _interopRequireDefault(_resolvers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var options = {
    port: process.env.PORT || 4000
};

var server = new _graphqlYoga.GraphQLServer({
    typeDefs: "./src/schema.graphql",
    resolvers: _resolvers2.default
});

server.start(options, function (_ref) {
    var port = _ref.port;
    return console.log("Server started, listening on port " + port + " for incoming requests.");
});