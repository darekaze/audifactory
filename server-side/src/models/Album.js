module.exports = (sequelize, DataTypes) => {
  const Album = sequelize.define('Album', {
    title: DataTypes.STRING,
    artist: DataTypes.STRING,
    genre: DataTypes.STRING,
    imageUrl: DataTypes.STRING,
    soundCloudId: DataTypes.STRING,
    price: DataTypes.INTEGER, /* $1.00 would be stored as 100. */
    stocks: DataTypes.INTEGER,
    loves: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    songs: DataTypes.JSON,
  });

  return Album;
};
