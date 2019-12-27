require('rootpath')();
require('dotenv').config()
const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const errorHandler = require('./_middleware/error-handler');
const userRouter = require('./routers/user')
//Our Mongoose DB
require('./config/database')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
//Log Everything
app.use(morgan('dev'))
// api routes
app.use(userRouter);

// global error handler
app.use(errorHandler);

// start server
const port = process.env.NODE_ENV === 'production' ? 80 : process.env.SERVER_PORT;
const server = app.listen(port, function () {
    console.log('Server listening on port' + port);
});