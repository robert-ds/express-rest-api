/**
 * librery to create fake data
 */
const {faker} = require('@faker-js/faker');

class UsersService {

  constructor() {
    this.users = [];
    this.generate();
  }

  generate(){
    const limit =  15;

    for(let i = 0; i < limit; i++){
      this.users.push({
        id: faker.string.uuid(),
        name: faker.person.firstName(),
        lastName: faker.person.lastName(),
        country: faker.location.country(),
        phone: faker.phone.number()
      });
    }

  }

  async create(data){
    const newUser = {
      id: faker.string.uuid(),
      ...data
    }
    this.product.push(newUser);
    return newUser;
  }

  find(){
    return this.users;
  }

  async findOne(id){
    return this.users.find(item => item.id === id);
  }

  async update(id, changes){
    const index = this.users.findIndex(item => item.id === id);

    if(index === -1) {
      throw new Error('User not found');
    }

    const user = this.user[index];
    this.user[index] = {
      ...user,
      ...changes
    }
    return this.user[index];
  }

  async delete(id){
    const index = this.user.findIndex(item => item.id === id);

    if(index === -1) {
      throw new Error('User not found');
    }
    this.user.splice(index, 1);
    return {
      id: index,
      message: 'User delete'
    }
  }

}

module.exports = UsersService;
