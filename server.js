const data = require('json-server');

const jsonServer = require('./MOCK_DATA1.json')

const server = jsonServer.create();
const router = jsonServer.router(data);
const middelwares = jsonServer.defaults();
const port = process.env.PORT || 3000;

server.use(middelwares);
server.use(router);

server.listen(port);