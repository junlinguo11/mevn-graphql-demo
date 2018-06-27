const express = require('express');
const expressGraphQL = require('express-graphql');
const path = require('path');
const compression = require('compression');
const cors = require('cors');

const db = require('./models/db');
const schema = require('./models/schemaQL');

const app = express();
app.use(compression());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/graphql', expressGraphQL({
    schema:schema,
    graphiql:true
}))

app.listen(3000, () => {
    console.log(`The application is running on localhost:3000!`);
});