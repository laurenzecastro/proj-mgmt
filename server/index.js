// eslint-disable-next-line import/no-extraneous-dependencies
require('dotenv').config();
require('colors');

const { graphqlHTTP } = require('express-graphql');
const express = require('express');
const schema = require('./schema');
const connectDB = require('./config/db');

const port = process.env.PORT || 5000;
const app = express();

connectDB();

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: process.env.NODE_ENV === 'development',
}));

app.listen(port, console.log(`Listening at port ${port}`));
