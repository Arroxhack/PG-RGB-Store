const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const routes = require("./routes/index.js");
const session = require("express-session");
const passport = require("passport");
const Strategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const flash = require("connect-flash");
const { findUser } = require("./controllers/users");
require("./db.js");
require("dotenv").config();
const { CORS_URL, SECRET } = process.env;

const server = express();

server.name = "API";

server.use(cookieParser());
server.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
server.use(bodyParser.json({ limit: "50mb" }));
server.use(flash());
server.use(
  session({
    secret: "SECRET",
    resave: true,
    saveUninitialized: true,
  })
); // estaban seteados a false

server.use(morgan("dev"));
server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

server.use("/", routes);

// Error catching endware.
server.use((err, req, res, next) => {
  // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

// ---------- AUTENTICACION ------------ //
passport.use(
  new Strategy(function (username, password, done) {
    console.log("paso uno de la autenticación");
    findUser(username) //busca en Postgress el usuario // FUNCION EN CONTROLADORES
      .then((user) => {
        if (!user) {
          return done(null, false, {
            message: "Error Nombre de usuario incorrecto",
          });
        }
        if (user) {
          // Voy a hacer la comparación y evaluar el resultado
          bcrypt.compare(password, user.password).then((res) => {
            // console.log(res, 'la respuesta de la promesa')
            if (res === false) {
              // No hay coincidencia entre las password
              return done(null, false, {
                message: "Error Contraseña incorrecta",
              });
            }
            if (res === true) {
              // Si hay coincidencia entre las password
              // console.log(user, res, ' user en la 54');
              return done(null, user); // !!!! usuario que se retorna en la ruta post "/login"
            }
          });
        }
      })
      .catch((err) => {
        console.log(err);
        return done(err);
      });
  })
);

passport.serializeUser(function (user, done) {
  console.log("paso dos de la autenticación");
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  console.log("paso tres de la autenticación");
  findUser({ id: id })
    .then((user) => {
      done(null, user);
    })
    .catch((err) => {
      return done(err);
    });
});

server.use(passport.initialize());
server.use(passport.session());

// Middleware para mostrar la sesión actual en cada request
server.use((req, res, next) => {
  // console.log(req.session, ' esto es req.session 120');
  // console.log(req.user, ' esto es req.user 121');
  next();
});
server.get("/login", (req, res) => {
  res.send("Username o contraseña incorrecta");
});

server.use("/", routes);

// --- --- Error catching endware.
server.use((err, req, res, next) => {
  // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});
module.exports = server;
