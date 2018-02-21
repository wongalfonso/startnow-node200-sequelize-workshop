'use strict';
module.exports = (sequelize, DataTypes) => {
  var Author = sequelize.define('Author', {
    firstName: DataTypes.STRING,
    lastName : DataTypes.STRING,
    email: DataTypes.STRING,
  }, {
    classMethods: {
      associate: function(models) {
        Author.hasMany(models.blog, {
          foreignKey: "authorId",
          as: "blogs",
          sourceKey: "id",
        })
      }
    }
  });
  return Author;
};