const server = require('./server');

const port = process.env.PORT || 3000;

server.get('/', (req, res) => res.status(200).json({ message: 'OK' }));

server.listen(port, () => {
  console.log(`[Server] Listening on: http://localhost:${port}`);
});
