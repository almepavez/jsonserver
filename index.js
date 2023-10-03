const jsonServer = require("json-server"); // importamos jsonserver
const server = jsonServer.create()
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3001; // puede colocar cualquier puerto

server.use(middlewares)
server.use(router)
server.listen(port)