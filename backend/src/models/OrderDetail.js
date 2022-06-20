const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('orderDetail', {
    amount: {
      type: DataTypes.NUMBER,
      allowNull: false,
      defaultValue: 0,
    },
    price: {
      type: DataTypes.NUMBER,
      allowNull: false,
      defaultValue: 0,
    },
  });
};
