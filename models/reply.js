'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reply extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Reply.init({
    post_id: DataTypes.BIGINT,
    user_id: DataTypes.BIGINT,
    content: DataTypes.TEXT,
    replied_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Reply',
  });
  return Reply;
};