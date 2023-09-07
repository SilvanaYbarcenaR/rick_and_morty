const http = require("http");
const data = require("./utils/data.js")

http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    if(req.url.includes("/rickandmorty/character")) {
        const id = req.url.split("/").at(-1);
        res.writeHead(200,
        {"Content-type": "application/json"})
        const character = data.find(char => {
            return char.id === +id;
        })
        res.end(JSON.stringify(character));
        return;
    }
}).listen(3001, "localhost");