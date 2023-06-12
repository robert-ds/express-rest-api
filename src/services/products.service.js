
/**
 * librery to create fake data
 */
const {faker} = require('@faker-js/faker');
const boom = require('@hapi/boom');

class ProductsService {

  constructor(){
    this.products = [];
    this.generate();
  }

  generate(){
    const limit = 15;
    for(let i = 0; i < limit; i++){
      this.products.push({
        id: faker.string.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.url(500,500,'auto'),
        isBlock: faker.datatype.boolean(),
      });
    }
  }

  async create(data){
    const newProduct = {
      id: faker.string.uuid(),
      ...data
    }

    this.products.push(newProduct);
    return newProduct;
  }

  find(){
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.products);
      }, 3000);
    });
  }

  async findOne(id){
    const product = this.products.find(item => item.id === id);
    if(!product){
      throw boom.notFound('Product not found');
    }

    if(product.isBlock){
      throw boom.conflict('Product is block');
    }
    return product;
  }

  async update(id, changes){
    const index = this.products.findIndex(item => item.id === id);
    if(index === -1){
      throw boom.notFound('Product not found');
    }
    const product = this.products[index];

    this.products[index] = {
      ...product,
      ...changes
    };
    return this.products[index];
  }

  async delete(id){
    const index = this.products.findIndex(item => item.id === id);
    if(index === -1){
      throw boom.notFound('Product not found');
    }
    this.products.splice(index, 1);
    return {id: index, message: 'Product delete'};
  }

}

module.exports = ProductsService;
