module.exports = (sequelize, DataTypes) => {
  return sequelize.define("User", {
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    password: DataTypes.STRING
  });
};
