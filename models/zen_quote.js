'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Zen_Quote extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    Zen_Quote.belongsTo(models.Profile, { foreignKey: 'profileId' })
    }
  }
  Zen_Quote.init({
    quote: {
      type: DataTypes.STRING,  
      allowNull: false,
      },
    profileId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      onDelete: 'CASCADE',
      references: {
        model: 'Profiles',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Zen_Quote',
  });
  return Zen_Quote;
};