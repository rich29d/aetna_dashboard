'use strict';

module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('installations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      dataProvider: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      installationDate: {
        allowNull: true,
        type: DataTypes.DATE,
      },
      systemSize: {
        allowNull: false,
        type: DataTypes.DECIMAL,
      },
      zipCode: {
        allowNull: true,
        type: DataTypes.INTEGER(5),
      },
      state: {
        allowNull: false,
        type: DataTypes.STRING(2),
      },
      cost: {
        allowNull: false,
        type: DataTypes.DECIMAL,
      },
      createdAt: {
        allowNull: false,
        defaultValue: DataTypes.literal('CURRENT_TIMESTAMP'),
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        defaultValue: DataTypes.literal('CURRENT_TIMESTAMP'),
        type: DataTypes.DATE,
      },
    });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('installations');
  }
};
