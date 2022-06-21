const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo

  //HAY QUE REVEEEEEEEER ESTO
  sequelize.define(
    'productComment',
    {
      name: {
        type: DataTypes.STRING(300),
        allowNull: true,
      },
    },
    { timestamps: false }
  );
};
