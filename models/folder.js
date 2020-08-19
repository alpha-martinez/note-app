'use strict';
module.exports = (sequelize, DataTypes) => {
  const folder = sequelize.define('folder', {
    folderTitle: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {} );
  folder.associate = function(models) {
    models.folder.belongsTo(models.user);
    models.folder.hasMany(models.note);
  };
  return folder;
}