const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("product", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    compatibilityBrands: {
      type: DataTypes.STRING("AMD", "INTEL"),
      allowNull: true,
      defaultValue: null,
    },
    ddr: {
      type: DataTypes.INTEGER(2, 3, 4, 5),
      allowNull: true,
      defaultValue: null,
    },
    socket: {
      type: DataTypes.STRING,
      defaultValue: true,
    },
    image: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    factorMother: {
      type: DataTypes.STRING(
        "standard-ATX",
        "micro-ATX",
        "mini-ITX",
        "nano-ITX",
        "pico-ITX"
      ),
      allowNull: true,
      defaultValue: null,
    },
    weight: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
    },
    proportions: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null,
    },
    wattsPowerSupply: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
    },
    inOffer: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    percentageDiscount: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0,
    },
  });
};
