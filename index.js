const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const port=process.env.PORT ||3200;
server.use(jsonServer.defaults());
server.use(middlewares);
server.use(router);

server.use(cors({
  origin: 'https://mdsalimprofile.web.app'
}));

server.listen(port, () => {
  console.log('JSON Server is running');
});
