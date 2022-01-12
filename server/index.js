const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/dev');
const FakeDb = require('./fake-db');
const productRoutes = require('./routes/products');

mongoose.connect(config.DB_URI).then(
  () => {
    const fakeDb = new FakeDb()
    fakeDb.initDb();
  }
)

const app = express();

app.use('/api/v1/products', productRoutes);

// app.get('/products', function(req, res){
//   res.json({'success': true})
// });

const PORT = process.env.PORT || '3001';


app.listen(PORT, function () {
 console.log('I am running');
})

// 'mongodb+srv://test:qsVfMtjYDrKoTUa8@cluster0.79daa.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
