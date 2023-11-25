'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Role extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsToMany(models.User,{
        through:'User_Roles',
      })
    }
    /*By passing a string to through above, we are asking Sequelize to automatically generate a model named 
    User_Roles as the through table (also known as junction table), with only two columns: userId and roleId.
    A composite unique key will be established on these two columns. */
    //we can do it manually also
  }
  Role.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Role',
  });
  return Role;
};