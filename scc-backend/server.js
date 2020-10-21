// SERVER
// DESCRIPTION:     Contains all the initializations for routes, mongodb and server

const express = require("express");
const mongoose = require("mongoose");
mongoose.set('useUnifiedTopology', true);
const cors = require("cors");

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


// MONGODB CONNECTION
const uri = process.env.MONGOURI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });
const connection = mongoose.connection;
connection.once("open", () => {
    console.log("MongoDB connection established successfully!");
});

// ROUTES
const userRouter = require("./routes/api/user");
app.use('/user', userRouter);
const renewableRouter = require("./routes/api/renewable");
app.use('/renewable', renewableRouter);
const emobilityRouter = require("./routes/api/emobility");
app.use('/emobility', emobilityRouter);
const insightRouter = require("./routes/api/insight");
app.use('/insight', insightRouter);
const ssoRouter = require("./routes/api/sso");
app.use('/singlesignon', ssoRouter);
const partnerRouter = require("./routes/api/partner");
app.use('/partner', partnerRouter);

// SWAGGER
app.use('/api-docs', swaggerUi.serve);
app.get('/api-docs', swaggerUi.setup(swaggerDocument));

app.listen(port, () => {
    console.log("Server is running on port:" + port);
});
