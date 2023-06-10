/**
 * librery to create fake data
 */
const {faker} = require('@faker-js/faker');

class CategoriesService {

  constructor(){
    this.categories = [];
    this.generate();
  }

  generate() {
    const limit = 5;
    for(let i = 0; i < limit; i++){
      this.categories.push({
        name: faker.music.genre(),
    });
    }
  }

  create(){

  }

  find(){
    return this.categories;
  }

  findOne(){

  }

  update(){

  }

  delete(){

  }

}

module.exports = CategoriesService;