const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo

  //HAY QUE REVEEEEEEEER ESTO
  sequelize.define(
    "purchase",
    {
      id: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
      },
      idUser:{
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      products:{
        type: DataTypes.ARRAY(DataTypes.JSON),
        allowNull: false
      }
    },
    { timestamps: true }
  );
};
