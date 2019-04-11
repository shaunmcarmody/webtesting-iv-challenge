const router = require('express').Router();
const db =  require('./users.model.js');

router.post('/', async (req, res) => {
  try {
    const arr = await db.insert(req.body);
    let resource = await db.get(arr[0]);
    res.status(201).json(resource);
  } catch (err) {
    console.log(err);
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const result = await db.remove(id);
    res.status(200).json(result);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;