module.exports = (sequelize) => {
  const Cart = sequelize.define('Cart', {});

  Cart.associate = (models) => {
    Cart.belongsTo(models.User);
    Cart.belongsTo(models.Album);
  };

  return Cart;
};
