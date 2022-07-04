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
                subject: "✔MODIFICACION DE PERMISOS✔", // Subject line
                text: "", // plain text body
                html: `<b>Sus permisos en la pagina fueron modificados su nuevo rol es:</b> <p>ADMINISTRADOR</p>`, // html body
              });
              res.send(`Rol de ${userToAdmin.username} cambiado a Admin`);
            }
          } else {
            res.status(404).send("Failed on edit");
          }
        } else {
          res.send("Error Este usuario ya tiene permisos de Admin");
        }
      } else {
        res.send(
          "Error El Administrador no tiene Suficiente Rango para realizar esta operacion"
        );
      }
    } else {
      res.send("Error No se mando ningun id");
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
              subject: "✔MODIFICACION DE PERMISOS✔", // Subject line
              text: "", // plain text body
              html: `<b>Sus permisos en la pagina fueron modificados su nuevo rol es:</b> <p>USUARIO</p>`, // html body
            });
            res.send(`Rol de ${AdminToUser.username} cambiado a usuario`);
          } else {
            res.send("Error Failed on edit");
          }
        } else {
          res.send("Error Este usuario no tiene permisos de Administrador");
        }
      } else {
        res.send(
          "Error El Administrador no tiene Suficiente Rango para realizar esta operacion"
        );
      }
    } else {
      res.send("Error No se mando ningun id");
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
          return res.send("Error, El Usuario no tiene Rango Administrador");
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
                subject: "✔MODIFICACION DE PERMISOS✔", // Subject line
                text: "", // plain text body
                html: `<b>Sus permisos en la pagina fueron modificados su nuevo rol es:</b> <p>SUPER ADMINISTRADOR</p>`, // html body
              });
              res.send(
                `Rol de ${AdminToSuperAdmin.username} cambiado a Super Admin`
              );
            }
          } else {
            res.send("Error al Actualizar Permisos");
          }
        } else {
          res.send(
            "Error el usuario al que le quieres dar el permiso todavia no tiene asignado el rol Administrador, primero asignale ese Rango para despues asignarle SuperAdmin"
          );
        }
      } else {
        res.send(
          "Error No tienes los permisos necesarios para Realizar estas Acciones"
        );
      }
    } else {
      res.send(
        "Error No tienes los permisos necesarios para Realizar estas Acciones"
      );
    }
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
