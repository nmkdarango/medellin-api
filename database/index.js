const mongoose = require('mongoose');

mongoose.connect(
  process.env.MONGO_URI,
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('✅ Conexión exitosa con Atlas'))
  .catch(() => console.log('🚫 Error al conectar con Atlas'));
