const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Freelancer extends Model {
    static associate() {
    }
  }
  Freelancer.init({
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    skillsets: DataTypes.STRING,
    hobby: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Freelancer',
  });
  return Freelancer;
};
