module.exports = (sequelize, DataTypes) => {
  const Album = sequelize.define('Album', {
    title: DataTypes.STRING,
    artist: DataTypes.STRING, /* need artist url? */
    genre: DataTypes.STRING,
    imageUrl: DataTypes.STRING,
    soundCloudId: DataTypes.STRING,
    songs: DataTypes.TEXT, /* can change to json? */
    stocks: DataTypes.INTEGER,
    loves: DataTypes.INTEGER,
    description: DataTypes.TEXT,
  });

  return Album;
};
