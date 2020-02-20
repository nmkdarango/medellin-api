const { server, PORT } = require('./server');

server.listen(PORT, () => console.log(`Server on ${PORT}`));
