const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "productComment",
    {
      comentario: {
        type: DataTypes.STRING(300),
        allowNull: false,
      },
      response:{
        type: DataTypes.STRING(300),
        allowNull: true,
      },
      idUser: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      idProducto: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    { timestamps: false }
  );
};
