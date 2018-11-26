module.exports = (sequelize) => {
  const PurchaseHistory = sequelize.define('PurchaseHistory', {});

  PurchaseHistory.associate = (models) => {
    PurchaseHistory.belongsTo(models.User);
    PurchaseHistory.belongsTo(models.Album);
  };

  return PurchaseHistory;
};
