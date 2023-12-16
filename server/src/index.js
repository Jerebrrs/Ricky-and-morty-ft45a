const PORT = 3001;
const server = require("./app");
const { conn } = require("./DB_connection");
//*sincronizacion instancia de siqulize
conn.sync({ force: false })// retorna una promesa
    .then(() => {
        server.listen(PORT, () => {
            console.log("Server raised in port: " + PORT);
        });
    })
    .catch(error => console.log(error.message));
//ponemos a escuchar el servidor en el puerto
