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

