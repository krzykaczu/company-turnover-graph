import { GraphQLServer } from "graphql-yoga"
import resolvers from './src/resolvers'

const options = {
    port: process.env.PORT || 4000,
}

const server = new GraphQLServer({
    typeDefs: "./src/schema.graphql",
    resolvers
})

server.start(options, ({ port }) => console.log(`Server started, listening on port ${port} for incoming requests.`));