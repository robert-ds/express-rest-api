const express = require('express');
/**
 * librery to create fake data
 */
// const {faker} = require('@faker-js/faker');
const router = express.Router();

router.get('/', (req, res) => {
  const {limit, offset} = req.query;
  if(limit && offset){
    res.json({
      limit,
      offset
    });
  }else {
    res.send('Dont params');
  }
});