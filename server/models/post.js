'use strict';
const User = require('./user');

module.exports = (sequelize, DataTypes) => {
  var Post = sequelize.define('Post', {
    userId: {
      type: DataTypes.INTEGER, 
      allowNull: false, 
      references: {
        model: User, 
        key: 'userId'
      }
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    image: {
      type: DataTypes.BLOB,
      allowNull: true
    },
  },
  {
    classMethods: {},
    tableName: 'post',
    freezeTableName: true,
    timestamps: false
  }, {});
  return Post;
};