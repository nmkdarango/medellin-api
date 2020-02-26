require('dotenv').config();
require('./database');
const { server, PORT } = require('./server');

// eslint-disable-next-line no-console
server.listen(PORT, () => console.log(`Server on ${PORT}`));
