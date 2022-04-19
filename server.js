const express = require('express');
const { ApolloServer} = require('apollo-server-express');
const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');

async function startServer() {
    const app = express();
    const apolloServer = new ApolloServer({
        typeDefs,
        resolvers,
        playground: true,
    });

    await apolloServer.start();

    apolloServer.applyMiddleware({app: app, path: '/hi'});

    app.use((req,res) => {
        res.send('Hello world');
    });

    app.listen(4000, () => console.log("Server in runing on port"));
};
startServer();