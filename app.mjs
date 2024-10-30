//uso import si el archivo tiene extensión .mjs
//o si em eñ archivo package.json se espcifica que los rchivos .js son módulos
import mongoose from 'mongoose';

//uso requre si el archivo es .js y no está definido como mósulo en el archivo package.json
//const mongoose = require('mongoose');
const uri= 'mongodb://localhost:27017/Sprint2Tp1';

//A ñas opciones las saqué como segundo parametro del método connect, porque está en desuso
const opciones = {
    useNewUrlParser: true,
    useUnifiedTopology: true, 
};

mongoose.connect(uri)
    .then(() => console.log("Conexión exitosa"))
    .catch(() => console.error("Error al conectarse", err));