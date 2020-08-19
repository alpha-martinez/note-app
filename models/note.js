'use strict';
module.exports = (sequelize, DataTypes) => {
  const note = sequelize.define('note', {
    title: DataTypes.STRING,
    summernote: DataTypes.TEXT,
    folderId: DataTypes.INTEGER
  }, {} );
  note.associate = function(models) {
    models.note.belongsTo(models.folder);
  };
  return note;
};