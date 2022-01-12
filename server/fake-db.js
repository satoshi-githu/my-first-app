const Product = require("./model/product");

class FakeDB {

  constructor() {
    this.products = [
      {
        coverImage: './assets/img/phone-cover.jpg',
        name: 'Phone XL',
        price: 799,
        description: 'A large phone with one of the best screens',
        heading1: 'サンプルテキスト1',
        heading2: 'サンプルテキスト2',
        heading3: 'サンプルテキスト3',
        headingtext1: 'sampletext sampletext sampletext sampletext sampletext',
        headingtext2: 'sampletext sampletext sampletext sampletext sampletext',
        headingtext3: 'Donec ullamcorper nulla non metus auctor fringilla..',
      },
      {
        coverImage: './assets/img/phone-cover.jpg',
        name: 'Phone Mini',
        price: 699,
        description: 'A great phone with one of the best cameras',
        heading1: 'サンプルテキスト1',
        heading2: 'サンプルテキスト2',
        heading3: 'サンプルテキスト3',
        headingtext1: 'sampletext sampletext sampletext sampletext sampletext',
        headingtext2: 'sampletext sampletext sampletext sampletext sampletext',
        headingtext3: 'Donec ullamcorper nulla non metus auctor fringilla..',
      },
      {
        coverImage: './assets/img/phone-cover.jpg',
        name: 'Phone Standard',
        price: 299,
        description: '',
        heading1: 'サンプルテキスト1',
        heading2: 'サンプルテキスト2',
        heading3: 'サンプルテキスト3',
        headingtext1: 'sampletext sampletext sampletext sampletext sampletext',
        headingtext2: 'sampletext sampletext sampletext sampletext sampletext',
        headingtext3: 'Donec ullamcorper nulla non metus auctor fringilla.',
      },
      {
        coverImage: './assets/img/phone-cover.jpg',
        name: 'Phone Special',
        price: 91199,
        description: 'A great phone with one of the best cameras',
        heading1: 'サンプルテキスト1',
        heading2: 'サンプルテキスト2',
        heading3: 'サンプルテキスト3',
        headingtext1: 'sampletext sampletext sampletext sampletext sampletext',
        headingtext2: 'sampletext sampletext sampletext sampletext sampletext',
        headingtext3: 'Donec ullamcorper nulla non metus auctor fringilla..',
      }
    ];
  }

  async initDb() {
    await this.cleanDb();
    this.pushProductsToDb();
  }

  async cleanDb() {
      await Product.deleteMany({});
    }

  pushProductsToDb() {
    this.products.forEach((product)=> {
      const newProduct = new Product(product);
      newProduct.save();
    })
  }
}

module.exports = FakeDB;
