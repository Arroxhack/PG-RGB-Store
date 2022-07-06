const { Router } = require("express");
const { User } = require("../../db");
const router = Router();

router.put("/Users/:id", async (req, res, next) => {
  const { id } = req.params;
  const user = await User.findOne({ where: { id } });
  if (!user) {
    return res.status(404).send("No users with that ID");
  }

  const objFinal = checkUser(req.body);
  const isUpdated = await User.update(objFinal, { where: { id } });
  //Update nos devuelve un array de length 1 con un 1 si fue todo bien y con 0 si salio mal
  isUpdated[0] === 1
    ? res.send("Correctly edit")
    : res.status(404).send("Failed on edit");
});

router.put("/blockUser", async (req, res, next) => {
  try {
    const { Userid, idAdmin } = req.body;
    console.log("AKAAAA", Userid, "KHE", idAdmin);
    if (Userid && idAdmin) {
      const Admin = await User.findOne({ where: { id: idAdmin } });
      if (Admin?.permissions === false) {
        return res.send("Error you not have permissions");
      }
      console.log("PASO1");
      const user = await User.findOne({ where: { id: Userid } });
      if (user.lock == false) {
        const update = await user.update({ lock: true });
        res.send("Done");
      } else {
        return res.send("Error the user is already Block");
      }
    } else {
      return res.status(404).send("Error");
    }
  } catch (e) {
    next(e);
  }
});

router.put("/unlockUser", async (req, res, next) => {
  try {
    const { Userid, idAdmin } = req.body;
    if (Userid && idAdmin) {
      const Admin = await User.findOne({ where: { id: idAdmin } });
      if (Admin?.permissions === false) {
        return res.send("Error you not have permissions");
      }
      const user = await User.findOne({ where: { id: Userid } });
      if (user.lock == true) {
        const update = await user.update({ lock: false });

        if (update[0] === 0) {
          return res.send("Error doing Update");
        } else {
          return res.send("Done");
        }
      } else {
        return res.send("Error the user is not Lock");
      }
    } else {
      return res.status(404).send("Error");
    }
  } catch (e) {
    next(e);
  }
});

function checkUser({
  name,
  lastname,
  username,
  email,
  password,
  cellphone,
  address,
  points,
  image,
  lock,
}) {
  let objFinal = {};

  if (name) {
    objFinal.name = name;
  }
  if (lastname) {
    objFinal.lastname = lastname;
  }
  if (username) {
    objFinal.username = username;
  }
  if (email) {
    objFinal.email = email;
  }
  if (password) {
    objFinal.password = password;
  }
  if (cellphone) {
    objFinal.cellphone = cellphone;
  }
  if (address) {
    objFinal.address = address;
  }
  if (points) {
    objFinal.points = points;
  }
  if (image) {
    objFinal.image = image;
  }
  if (lock) {
    objFinal.lock = lock;
  }
  return objFinal;
}

module.exports = router;
