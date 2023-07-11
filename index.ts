import express from 'express';
import { routerApi } from './src/controllers/routes';
import mongoose from 'mongoose';

const app = express();
const PORT = 3500;

app.use(express.json());

mongoose.connect('mongodb+srv://alex88maa:apie-commerce@cluster0.i3cualu.mongodb.net/')
.then(() => {
    console.log("Conexion a Mongo establecida correctamente!");
})
.catch(() => {
    console.log("Error de conexion con Mongo");
});

routerApi(app);

app.listen( PORT, () => {
    console.log("La aplicacion se esta ejecuntando en localhost:" + PORT);
});