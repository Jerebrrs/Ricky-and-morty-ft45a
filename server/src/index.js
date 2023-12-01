const http = require("http");
const PORT = 3001;
const characters = require("./utils/data");
const getCharByID = require("./controllers/getCharById");


http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');

    if (req.url.includes("/rickandmorty/character")) {
        const id = req.url.split("/").pop();
        getCharByID(res, id);
    }
})
    .listen(PORT, "127.0.0.1",
        () => (console.log(`server listinening om prt ${PORT}`))
    );

