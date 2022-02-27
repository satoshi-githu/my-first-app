const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/');
const FakeDb = require('./fake-db');
const path = require('path');
const productRoutes = require('./routes/products');

mongoose.connect(config.DB_URI).then(
  () => {
    if(process.env.NODE_ENV !== 'production') {
      const fakeDb = new FakeDb()
      // fakeDb.initDb();
    }

  }
)

const app = express();

app.use('/api/v1/products', productRoutes);

if(process.env.NODE_ENV === 'production') {
    const appPath = path.join(__dirname, '..', 'dist', 'my-first-app');
    app.use(express.static(appPath));
    app.get("*", (req, res) => {
      res.sendFile(path.resolve(appPath, 'index.html'))
    })
}



// app.get('/products', function(req, res){
//   res.json({'success': true})
// });

const PORT = process.env.PORT || '3001';


app.listen(PORT, function () {
 console.log('I am running');
})

// 'mongodb+srv://test:qsVfMtjYDrKoTUa8@cluster0.79daa.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
