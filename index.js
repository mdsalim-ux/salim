const jsonServer = require('json-server');
const cors = require('cors');

const server = jsonServer.create();
const router = jsonServer.router('db.json');

server.use(jsonServer.defaults());

server.use(cors({
  origin: 'https://mdsalimprofile.web.app'
}));

server.use(router);
server.listen(3000, () => {
  console.log('JSON Server is running');
});
