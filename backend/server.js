const express = require('express');
const app = express();
const dbConnect = require('./config/db');
const userRoute = require('./routes/userRoter');
const adminRoute = require('./routes/adminRoutes');
const path = require('path');
const cors = require('cors')

const port =  8000
dbConnect();

app.use(express.json())
app.use(express.static(path.join(__dirname, "public")));
app.use(cors({origin: true, credentials: true}));

app.use('/api/users',userRoute);
app.use('/api/admin',adminRoute);

if('production' == 'production'){
  const __dirname = path.resolve();
  app.use(express.static(path.join(__dirname, 'frontend/build')));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
  })
}else{
  app.get('/',(req,res) => res.send('yep am readt',port));
}

app.listen(port)