const { Router } = require("express");
const { User } = require("../../db");
const router = Router();
const bcrypt = require("bcrypt");

//======================================
//CAMBIAR PARAMS!!!!! PELIGROSO! PUEDO ACCEDER A PERFILES DE OTROS USER Y EDITARLOS!!!
//======================================
router.put("/profile/edit", async (req, res, next) => {
  const {
    id,
    NameEdit,
    LastnameEdit,
    AddressEdit,
    CellphoneEdit,
    ImageUpload,
    Password,
  } = req.body;

  try {
    const user = await User.findOne({ where: { id: id } });

    if (!user) {
      res.status(404).send("Something go wrong :(");
    } else {
      const confirm = await bcrypt.compare(Password, user.password);
      if (confirm == true) {
        const usuarioEditado = await User.update(
          {
            name: NameEdit,
            lastname: LastnameEdit,
            address: AddressEdit,
            cellphone: CellphoneEdit,
            image: ImageUpload,
          },
          { where: { id: id } }
        );
        if (usuarioEditado[0] == 1) {
          res.send("Hemos editado su perfil satisfactoriamente");
        } else {
          res.send("Error al editar el perfil");
        }
      } else {
        res.send("Error,Contraseña Incorrecta");
      }
      console.log(user);
      res.send("done");
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
