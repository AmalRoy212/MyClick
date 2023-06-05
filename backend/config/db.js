const mongoose = require('mongoose');

const connectDB = () =>  
  mongoose
    .connect("//127.0.0.1:27017/WebApplication",{
      useNewUrlParser : true,
      useUnifiedTopology : true
    }).then(()=> console.log('DB Connected'))
    .catch(console.error);

module.exports = connectDB;
