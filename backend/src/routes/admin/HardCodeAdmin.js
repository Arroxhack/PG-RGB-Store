const { Router } = require('express');
const { User, Admin } = require('../../db');
const bcrypt = require('bcrypt');
const randomstring = require('randomstring');
const router = Router();

router.post('/hardAdmin', async (req, res, next) => {
  const { validatePass } = req.body;
  try {
    if (validatePass === 'Yasuo4ever') {
      const name = 'admin';
      const lastname = 'admin';
      const username = 'admin';
      const password = 'tinorusso123';
      const email = 'rgbstore0@gmail.com';
      const securityLevels = 8;
      const passHashed = bcrypt.hash(password, securityLevels);
      const secretToken = randomstring.generate(7);
      const promisedAll = await Promise.all([secretToken, passHashed]);
      const userAdmin = await User.create({
        name,
        lastname,
        username,
        email,
        password: promisedAll[1],
        verify: true,
        permissions: true,
        secretToken: promisedAll[0],
      });
      console.log('acacaca');

      const userInAdmin = await Admin.create({
        username,
        email,
        superAdmin: true,
      });

      if (userAdmin && userInAdmin) {
        return res.send(userInAdmin);
        res.send({ success: 'created successfully' });
      } else {
        res.status(404).send({ error: 'created was wrong' });
      }
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
