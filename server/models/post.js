'use strict';
module.exports = (sequelize, DataTypes) => {
  var Post = sequelize.define('Post', {
    userId: {
      type: DataTypes.INTEGER, 
      allowNull: false
    },
    content: DataTypes.TEXT,
    image: {
      type: DataTypes.BLOB,
      allowNull: true
    }
  },{});
  Post.associate = function(models) {
    Post.belongsTo(models.User, {foreignKey: 'userId', targetKey: 'id'});
    // associations can be defined here
  };
  return Post;
};
// //post
// const City = sequelize.define('city', { countryCode: Sequelize.STRING });
// //user
// const Country = sequelize.define('country', { isoCode: Sequelize.STRING });

// // Here we can connect countries and cities base on country code
// //user
// Country.hasMany(City, {foreignKey: 'countryCode', sourceKey: 'isoCode'});
// //post
// City.belongsTo(Country, {foreignKey: 'countryCode', targetKey: 'isoCode'});