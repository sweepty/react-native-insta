'use strict';
const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
  var Post = sequelize.define('Post', {
    postId: {
      type: DataTypes.INTEGER, 
      primaryKey: true, 
      autoIncrement: true
    },
    // userId: {
    //   type: DataTypes.INTEGER, 
    //   allowNull: false, 
    //   references: {
    //     model: models.User, 
    //     key: 'userId'
    //   }
    // },
    content: DataTypes.TEXT,
    image: {
      type: DataTypes.BLOB,
      allowNull: true
    },
    createAt: {
      type: DataTypes.DATE, 
      defaultValue: DataTypes.NOW
    }
  },
  {
    classMethods: {},
    tableName: 'post',
    freezeTableName: true,
    // underscored: true,
    timestamps: false
  }, {});
  return Post;
};