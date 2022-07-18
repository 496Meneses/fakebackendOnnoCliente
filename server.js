const data = require('./MOCK_DATA1.json');

const jsonServer = require('json-server')

const server = jsonServer.create();
const router = jsonServer.router(data);
const middelwares = jsonServer.defaults();
const port = process.env.PORT || 3000;

server.use(middelwares);
server.use(router);

server.listen(port);