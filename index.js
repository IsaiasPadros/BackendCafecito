import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import 'dotenv/config'; //permite procesar variables de entorno
import productoRouter from './src/routes/productos.routes.js';
import './src/database/database.js'


//1- configuraciones iniciales
const app = express();
//crear una variable con express
app.set('port', process.env.PORT || 4000 );
app.listen(app.get('port'),()=>{
    console.log('Estoy en el puerto ' + app.get('port'))

})
//2- middlewares: funciones que dan herramientas a mi backend
app.use(cors()); //permite conexiones remotas
app.use(express.json()); //permite entender a los json
app.use(express.urlencoded({extended:true})); //Si me mandan un array con strings para entenderlo (datos del body del request)
app.use(morgan('dev'));// Nos da mas informacion en la terminal


//3- crear las rutas
// http://localhost:4000/api/producto
app.use('/api', productoRouter)