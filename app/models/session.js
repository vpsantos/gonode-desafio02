module.exports = (sequelize, DataTypes) => {
  const Session = sequelize.define('Session', {
    primaryKey: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    expires: DataTypes.DATE,
    data: DataTypes.TEXT,
  });

  return Session;
};