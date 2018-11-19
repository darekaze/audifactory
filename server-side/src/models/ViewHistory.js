module.exports = (sequelize) => {
  const ViewHistory = sequelize.define('ViewHistory', {});

  ViewHistory.associate = (models) => {
    ViewHistory.belongsTo(models.User);
    ViewHistory.belongsTo(models.Album);
  };

  return ViewHistory;
};
