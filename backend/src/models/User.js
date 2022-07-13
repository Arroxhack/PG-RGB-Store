const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('user', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null,
      unique: true,
    },
    image: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null,
    },
    cellphone: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null,
    },
    points: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    permissions: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    secretToken: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null,
    },
    verify: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    lock: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
    },
    cartProducts: {
      //LO QUE VA A TENER ESTO ES: TODO LO QUE TIENE PRODUCT + AMOUNT (CANTIDAD DE CADA PRODUCTO EN EL CARRITO)
      type: DataTypes.ARRAY(DataTypes.JSON),
      allowNull: true,
      defaultValue: [{}],
    },
    tokenResetPassword: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null,
    },
    favoritos: {
      type: DataTypes.ARRAY(DataTypes.INTEGER),
      allowNull: true,
      defaultValue: [],
    },
    //AGREGAR FAVORITOS
  });
};
