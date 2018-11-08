module.exports = (sequelize) => {
  const Love = sequelize.define('Love', {});

  Love.associate = (models) => {
    Love.belongsTo(models.User);
    Love.belongsTo(models.Album);
  };

  return Love;
};
