const { ApolloServer, gql } = require('apollo-server');


const typeDes = gql`
type Query {
    sessions: [Session]
}

type Session {
    id: ID!
    title: String!,
    description: String,
    startAt: String,
    endsAt: String,
    room: String,
    day: String,
    format: String,
    track: String,
    level: String,
}`

const server = new ApolloServer({ typeDes });

server
    .listen({ port: process.env.PORT || 4000 })
    .then(({ url }) => {
        console.log(`GraphQL running at ${url}`);
    })