const { Router } = require('express');
const { User } = require('../../db');
const router = Router();

//======================================
//CAMBIAR PARAMS!!!!! PELIGROSO! PUEDO ACCEDER A PERFILES DE OTROS USER Y EDITARLOS!!!
//======================================
router.put('/profile/edit/:username', async (req, res, next) => {
  const { username } = req.params;

  try {
    const user = await User.findOne({ where: { username } });

    if (!user) {
      res.status(404).send('Something go wrong :(');
    } else {
      //const objFinal = checkUser(toEdit);
      //LO HAGO ASI PORQUE SI NO ME TIRA ERROR, SON LAS 1 AM
      //CUANDO TENGAMOS TIEMPO LO ARREGLO, PORFA NO CRITIQUEN DEA
      if (req.body.name) {
        user.set({ name: req.body.name });
      }
      if (req.body.lastname) {
        user.set({ lastname: req.body.lastname });
      }
      if (req.body.username) {
        user.set({ username: req.body.username });
      }
      if (req.body.email) {
        user.set({ email: req.body.email });
      }
      if (req.body.cellphone) {
        user.set({ cellphone: req.body.cellphone });
      }
      if (req.body.address) {
        user.set({ address: req.body.address });
      }
      if (req.body.image) {
        user.set({ image: req.body.image });
      }
      await user.save();

      console.log(user);
      res.send('done');
    }
  } catch (error) {
    next(error);
  }
});

// function checkUser(user) {
//   let objFinal = {};

//   if (user?.name) {
//     objFinal.name = user.name;
//   }
//   if (user?.lastname) {
//     objFinal.lastname = user.lastname;
//   }
//   if (user?.username) {
//     objFinal.username = user.username;
//   }
//   if (user?.email) {
//     objFinal.email = user.email;
//   }
//   if (user?.password) {
//     objFinal.password = user.password;
//   }
//   if (user?.cellphone) {
//     objFinal.cellphone = user.cellphone;
//   }
//   if (user?.address) {
//     objFinal.address = user.address;
//   }
//   if (user?.image) {
//     objFinal.image = user.image;
//   }
//   return objFinal;
// }
module.exports = router;
