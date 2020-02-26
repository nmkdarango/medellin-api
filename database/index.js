const mongoose = require('mongoose');

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  // eslint-disable-next-line no-console
  .then(() => console.log('-- Database connected --'))
  // eslint-disable-next-line no-console
  .catch((err) => console.log('Database ERROR: ', err));
