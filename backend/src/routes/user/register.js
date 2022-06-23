const { Router } = require('express');
const { User } = require('../../db');
const bcrypt = require('bcrypt');
const randomstring = require('randomstring');
const router = Router();

//-------------------------------------------------------------------------------
// Esta ruta get responde cuando un usuario con sesión activa intenta
// hacer un post a /register.
//-------------------------------------------------------------------------------

router.get('/register', (req, res, next) => {
  res.send(
    'No puede realizar un post /register mientras su sesión esté iniciada'
  );
});

router.post('/register', async (req, res, next) => {
  const {
    name,
    lastname,
    username,
    image,
    cellphone,
    email,
    password,
    address,
  } = req.body;

  if (!name || !lastname || !password || !email || !username) {
    return res.send('Fill all the blanks');
  }

  try {
    const AccountLock = await User.findOne({ where: { email } });
    console.log(AccountLock);
    if (AccountLock?.lock) {
      return res.status(400).send('Account blocked');
    }

    if (name && lastname && password && email) {
      const findUserEmail = User.findOne({ where: { email } });
      const findUserName = User.findOne({ where: { username } });
      const securityLevels = 8;
      const passHashed = bcrypt.hash(password, securityLevels);
      const secretToken = randomstring.generate(7); // Genero un token de seguridad PARA VERIFICAR MAIL
      let userId;
      let newUser;

      const promisedAll = await Promise.all([
        findUserEmail,
        findUserName,
        secretToken,
        passHashed,
      ]);
      console.log(promisedAll, ' mis promesas!');

      if (promisedAll[0]) {
        // Si el correo ya existe
        return res.send('This mail already exist, use another!!');
      } else if (promisedAll[1]) {
        return res.send('This username already exist, use another!!');
      } else {
        newUser = await User.create({
          name,
          lastname,
          username,
          email,
          password: promisedAll[3],
          secretToken: promisedAll[2],
        });

        if (newUser.id) {
          userId = newUser.id;
        }
        res.send(newUser.username);
        // res.redirect(
        //   `/register/activation/${userId}/${promisedAll[2]}/${newUser.username}`
        // );
      }
    } else {
      res.status(404).send('Blanks in form, register not created');
    }
  } catch (error) {
    next(error, 'error');
  }
});

router.put('/register/verify/:username', async (req, res, next) => {
  const { token } = req.body;
  const { username } = req.params;
  const user = User.findOne({ where: { username } });

  if (user.secretToken === token) {
    const isVerified = user.update({ verify: true });
    isVerified[0] === 1
      ? res.json({validate:true,user})
      : res.status(404).send('Failed on edit');
  } else {
    res.status(404).send('Invalid token');
  }

  //Update nos devuelve un array de length 1 con un 1 si fue todo bien y con 0 si salio mal
});
module.exports = router;
