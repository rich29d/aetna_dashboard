module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define(
    'users',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      nome: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'name',
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true,
      },
      senha: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'password',
      },
      estado: {
        allowNull: false,
        type: DataTypes.STRING(2),
        field: 'state',
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      }
    },
    {
      tableName: 'users',
      timestamps: true
    }
  );

  return Users;
}