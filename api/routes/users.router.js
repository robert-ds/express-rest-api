const express = require('express');
const UsersService = require('../services/user.service');
const router = express.Router();
const service = new UsersService();

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
  const users = service.find();
  res.json(users);
});

router.get('/:id', async (req, res) => {
  const {id} = req.params;
  const user = await service.findOne(id);
  res.json(user);
});

module.exports = router;