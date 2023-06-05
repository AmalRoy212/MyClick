const mongoose = require('mongoose');

const connectDB = () =>  
  mongoose
    .connect(process.env.MONGOOSE_CONNECT_URL,{
      useNewUrlParser : true,
      useUnifiedTopology : true
    }).then(()=> console.log('DB Connected'))
    .catch(console.error);

module.exports = connectDB;