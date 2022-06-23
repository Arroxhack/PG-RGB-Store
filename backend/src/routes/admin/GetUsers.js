const { Router } = require('express');
const { User } = require('../../db');
const router = Router();

router.get('/Users', async (req, res, next) => {
  try {
    const allUsers = await User.findAll();
    allUsers?.length
      ? res.send(allUsers)
      : res.status(404).send('Something go wrong :(');
  } catch (error) {
    next(error);
  }
});
module.exports = router;
