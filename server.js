const express = require('express');
const {
  graphqlExpress,
  graphiqlExpress,
} = require('graphql-server-express');
const bodyParser = require('body-parser');

const schema = require('./src/schema');

const PORT = 8080;
const app = express();

app.use('/graphql', bodyParser.json(), graphqlExpress({
  schema
}));

app.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql'
}));

app.listen(PORT);
console.log('GraphQL API Server up and running at localhost:' + PORT);