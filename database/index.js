const moongose = require('mongoose');

moongose.connect(
    process.env.MONGO_URI,
    {
        useNewUrlParser:true,
        useUnifiedTopology:true
    }
)
.then(()=> console.log('Conexión a mongo db exitosa'))
.catch((error)=> console.log('Problema en la conexión'+error));

mongoose.connect(
  process.env.MONGO_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
)
  // eslint-disable-next-line no-console
  .then(() => console.log('✅ Conexión exitosa con Atlas'))
  // eslint-disable-next-line no-console
  .catch(() => console.log('🚫 Error al conectar con Atlas'));
