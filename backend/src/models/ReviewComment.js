const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo

  //HAY QUE REVEEEEEEEER ESTO
  sequelize.define(
    "reviewComment",
    {
      comentario: {
        type: DataTypes.STRING(300),
        allowNull: true,
      },
      idUser: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      idCompra: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      idProducto: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      NameProduct: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      Comentado: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
    },
    { timestamps: false }
  );
};
