const {ApolloServer} = require("apollo-server");
const gql = require("graphql-tag");
const mongoose = require("mongoose");
const {MONGODB} = require("./config");

const typeDefs = gql`

    type Query {
        sayHi: String!
    }

`

// need to put all querys together, all mutations together
const resolvers = {
    Query: {
        sayHi: () => "Hello World!"
    }
};

mongoose.connect(MONGODB, {useNewUrlParser: true})
    .then(() => {
        console.log("MongoDB connected");
        return server.listen({port: 5000});
    }).then(res => {
        console.log(`Server running at ${res.url}`)
    });

const server = new ApolloServer({
    // ES6 infers on its own if its the same name and type
    typeDefs,
    resolvers
});