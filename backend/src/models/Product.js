const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('product', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: null,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: null,
    },
    stock: {
      type: DataTypes.NUMBER,
      allowNull: false,
      defaultValue: null,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: null,
    },
    compatibilityBrands: {
      type: DataTypes.ENUM('AMD', 'INTEL'),
      allowNull: false,
      defaultValue: null,
    },
    ddr: {
      type: DataTypes.ENUM(2, 3, 4, 5),
      allowNull: false,
      defaultValue: null,
    },
    socket: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    image: {
      type: DataTypes.TEXT,
      defaultValue: null,
    },
    factorMother: {
      type: DataTypes.ENUM(
        'standard-ATX',
        'micro-ATX',
        'mini-ITX',
        'nano-ITX',
        'pico-ITX'
      ),
      allowNull: false,
      defaultValue: null,
    },
    weight: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: null,
    },
    proportions: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: null,
    },
    wattsPowerSupply: {
      type: DataTypes.NUMBER,
      allowNull: false,
      defaultValue: null,
    },
    inOffer: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    percentageDiscount: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
    },
  });
};
