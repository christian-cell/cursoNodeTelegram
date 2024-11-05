const express = require('express');
// import express from 'express'; EC6
// require('./components/message/store');
// Conectar a la base de datos
const { connectDB } = require('./components/message/store');

// const connectDB = require('./components/message/store');
const bodyParser = require('body-parser');
const router = require('./network/routes');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : false }));
app.use(bodyParser.json());
app.use(bodyParser.json());

connectDB();

router(app);

app.use(router);
app.use('/app' , express.static('public'));
app.listen(3000);

console.log(`la aplicación esta escuchando http://localhost:3000`);