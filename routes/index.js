const express = require('express');
const router = express.Router();
const db = require('../models');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET maps page */
router.get('/maps', async (req, res, next) => {
  const maps = await db.Maps.findAll();
  res.format({

      html: () => {
          res.render('maps', {
              title: 'Maps Brawl Star',
              maps: maps
          })
      },

      json: () => {
          res.json(maps)
      }
  });
})


module.exports = router;
