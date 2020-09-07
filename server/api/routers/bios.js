const biosRouter = require('express').Router();
const {
  Bio,
} = require('../../db/Models/index');

biosRouter.get('/', async (req, res) => {
  const bios = await Bio.findAll();
  res.send(bios);
});

module.exports = biosRouter;
