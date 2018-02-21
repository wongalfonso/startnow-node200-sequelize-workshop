'use strict';
module.exports = (sequelize, DataTypes) => {
  var Blog = sequelize.define('Blog', {
    authorId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    article: DataTypes.TEXT,
    published: DataTypes.DATE,
    featured: DataTypes.BOOLEAN,
  }, {
    classMethods: {
      associate: function(models) {
        Blog.belongsTo(models.Author, {
          as: "author",
          foreignKey: "authorId",
          targetKey: "id",
        })
      }
    }
  });
  return Blog;
};