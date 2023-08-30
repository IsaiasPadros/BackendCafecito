import express from 'express';

//1- configuraciones iniciales
const app = express();
//crear una variable con express
app.set('port', process.env.PORT || 4000 );

//2- middlewares

//3- crear las rutas