const express = require('express');  //requerimos del fremwors
const morgan = require("morgan");
const router = require('./routes');
const server = express();           // creamos la instancia
const PORT = 3001;

//*Middlewars
server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header(
        'Access-Control-Allow-Methods',
        'GET, POST, OPTIONS, PUT, DELETE'
    );
    next();
});
server.use(express.json());
server.use(morgan("dev"));

server.use("/rickandmorty", router);


//ponemos a escuchar el servidor en el puerto
server.listen(PORT, () => {
    console.log("Server raised in port: " + PORT);
});