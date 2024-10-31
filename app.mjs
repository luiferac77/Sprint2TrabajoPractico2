//uso import si el archivo tiene extensión .mjs
//o si em eñ archivo package.json se espcifica que los rchivos .js son módulos
//import mongoose from 'mongoose';
import { conectar, cerrarConexion } from "./conexion.mjs";
//si uso extensión .mjs debo indicar con assert que se trata de un archivo de tipo json
//esto dará una advertencia de que el uso de assert es experimental
import conexionRemoto from "./configDbRemoto.json" assert {type: "json"};

//uso requre si el archivo es .js y no está definido como mósulo en el archivo package.json
//const mongoose = require('mongoose');
//const uri = 'mongodb://localhost:27017/Sprint2Tp1';
const uri = 'mongodb+srv://Grupo-12:grupo12@cursadanodejs.ls9ii.mongodb.net/';

//A las opciones las saqué como segundo parametro del método connect, porque está en desuso
/*const opciones = {
    useNewUrlParser: true,
    useUnifiedTopology: true, 
};

mongoose.connect(uri)
    .then(() => console.log("Conexión exitosa"))
    .catch(err => console.error("Error al conectarse", err));
*/

conectar(conexionRemoto.db.uri);
cerrarConexion();