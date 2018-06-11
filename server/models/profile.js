'use strict';
module.exports = (sequelize, DataTypes) => {
  var Profile = sequelize.define('Profile', {
    userId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    intro: {
      type: DataTypes.STRING,
      allowNull: true
    },
    profileImg: {
      type: DataTypes.BLOB,
      allowNull: true
    },
    myUrl: {
      type: DataTypes.STRING,
      allowNull: true 
    }
  }, {});
  Profile.associate = function(models) {
    // associations can be defined here
    Profile.belongsTo(models.User, {foreignKey: 'userId', targetKey: 'id'}); 
  };
  return Profile;
};