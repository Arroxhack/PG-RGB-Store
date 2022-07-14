const { Router } = require("express");
const { User, Admin } = require("../../db");
const { transporter } = require("../../nodemailer/config");
const router = Router();

router.post("/updateToAdmin", async (req, res) => {
  const { idUser, idAdmin } = req.body;
  try {
    if (idUser && idAdmin) {
      const Administrador = await User.findOne({ where: { id: idAdmin } });
      const RangoSuperAdmin = await Admin.findOne({
        where: { username: Administrador.username },
      });
      if (RangoSuperAdmin.superAdmin === true) {
        const userToAdmin = await User.findOne({ where: { id: idUser } });
        if (userToAdmin.permissions === false) {
          const permisos = await User.update(
            { permissions: true },
            { where: { id: idUser } }
          );
          if (permisos[0] === 1) {
            const newAdmin = await Admin.create({
              username: userToAdmin.username,
              email: userToAdmin.email,
              id: idUser,
            });
            if (newAdmin.username == userToAdmin.username) {
              await transporter.sendMail({
                from: "rgbstore0@gmail.com", // sender address
                to: userToAdmin.email, // list of receivers
                subject: "Permissions changes ✔", // Subject line
                text: "", // plain text body
                html: `<b>Your permissions were updated. Your new role is now:</b> <p>Administrator</p>`, // html body
              });
              res.send(`${userToAdmin.username} is now Admin`);
            }
          } else {
            res.status(404).send("Failed on edit");
          }
        } else {
          res.send("Error: This user is already an Admin");
        }
      } else {
        res.send(
          "Error: Insufficient rank to make this operation"
        );
      }
    } else {
      res.send("Error: No id");
    }
  } catch (e) {
    console.log(e);
  }
});

router.post("/updateToUser", async (req, res) => {
  try {
    const { idUser, idAdmin } = req.body;
    if (idUser && idAdmin) {
      const Administrador = await User.findOne({ where: { id: idAdmin } });
      const RangoSuperAdmin = await Admin.findOne({
        where: { username: Administrador.username },
      });
      if (RangoSuperAdmin.superAdmin === true) {
        const AdminToUser = await User.findOne({ where: { id: idUser } });
        const TablaAdmin = await Admin.findOne({
          where: { username: AdminToUser.username },
        });
        if (AdminToUser.permissions === true) {
          const QuitarPermisos = await User.update(
            { permissions: false },
            { where: { id: idUser } }
          );
          if (QuitarPermisos[0] === 1) {
            await TablaAdmin.destroy();

            await transporter.sendMail({
              from: "rgbstore0@gmail.com", // sender address
              to: AdminToUser.email, // list of receivers
              subject: "Permissions changes ✔", // Subject line
              text: "", // plain text body
              html: `<b>Your permissions were updated. Your new role is now:</b> <p>User</p>`, // html body
            });
            res.send(`${AdminToUser.username} is now User`);
          } else {
            res.send("Error: Failed on edit");
          }
        } else {
          res.send("Error: This user is not an Admin");
        }
      } else {
        res.send(
          "Error: Insufficient rank to make this operation"
        );
      }
    } else {
      res.send("Error: No id");
    }
  } catch (e) {
    console.log(e);
  }
});

router.post("/UpdateToSuperAdmin", async (req, res) => {
  try {
    const { idUser, idAdmin } = req.body;
    const AdminPrincipal = await User.findOne({ where: { id: idAdmin } });
    if (AdminPrincipal?.permissions === true) {
      const VerificacionSuperAdmin = await Admin.findOne({
        where: { username: AdminPrincipal.username },
      });
      if (VerificacionSuperAdmin?.superAdmin === true) {
        const AdminToSuperAdmin = await User.findOne({ where: { id: idUser } });
        const TablaAdmin = await Admin.findOne({
          where: { username: AdminToSuperAdmin.username },
        });
        if (!TablaAdmin) {
          return res.send("Error: The user rank is not Admin");
        }
        if (TablaAdmin.username == AdminToSuperAdmin.username) {
          const DarSuperAdmin = await Admin.update(
            { superAdmin: true },
            { where: { username: TablaAdmin.username } }
          );

          if (DarSuperAdmin[0] === 1) {
            if (TablaAdmin.username == AdminToSuperAdmin.username) {
              await transporter.sendMail({
                from: "rgbstore0@gmail.com", // sender address
                to: TablaAdmin.email, // list of receivers
                subject: "Permissions changes ✔", // Subject line
                text: "", // plain text body
                html: `<b>Your permissions were updated. Your new role is now:</b> <p>Super Admin</p>`, // html body
              });
              res.send(
                `${AdminToSuperAdmin.username} is now Super Admin`
              );
            }
          } else {
            res.send("Error while updating permissions");
          }
        } else {
          res.send(
            "Error: The user needs to be Admin first to become Super Admin"
          );
        }
      } else {
        res.send(
          "Error: Insufficient rank to make this operation"
        );
      }
    } else {
      res.send(
        "Error: Insufficient rank to make this operation"
      );
    }
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
