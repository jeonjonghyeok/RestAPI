// SERVER
// DESCRIPTION:     Contains all the initializations for routes, mongodb and server

const express = require("express");
const swaggerUi = require('swagger-ui-express');
swaggerDocument = require('./swagger.json');

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());
// app.use(express.static('public'));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


// ROUTES
app.listen(port, () => {
    console.log("Server is running on port:" + port);
});
