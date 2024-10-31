import mongoose from "mongoose";


//const uri = 'mongodb+srv://Grupo-12:grupo12@cursadanodejs.ls9ii.mongodb.net/';
export const conectar = (uri) => {
    mongoose.connect(uri)
        .then(() => { console.log("La conexión ha sido exitosa")})
        .catch(err => { console.log("Error en la conexión", err)} )
};

export const cerrarConexion = () => {
    mongoose.connection.close()
        .then(console.log("la conexión se ha crrado"))
        .catch(err => console.log("Error al cerrar la conexión", err))
};
/*export function conectar(uri){
    mongoose.connect(uri)
        .then(() => { console.log("La conexión ha sido exitosa")})
        .catch(err => { console.log("Error en la conexión", err)} )
}*/