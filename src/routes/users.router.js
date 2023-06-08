const express = require('express');
/**
 * librery to create fake data
 */
const {faker} = require('@faker-js/faker');
const router = express.Router();

// router.get('/', (req, res) => {
//   const {limit, offset} = req.query;
//   if(limit && offset){
//     res.json({
//       limit,
//       offset
//     });
//   }else {
//     res.send('Dont params');
//   }
// });

router.get('/', (req, res) => {
  const users = [];
  const {size} = req.query;
  const limit = size || 10;

  for(let i = 0; i < limit; i++){
    users.push({
      name: faker.person.firstName(),
      lastName: faker.person.lastName(),
      country: faker.location.country(),
      phone: faker.phone.number()
    });
  }

  res.json(users);
});

module.exports = router;