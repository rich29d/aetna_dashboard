module.exports = (sequelize, DataTypes) => {
  const Installations = sequelize.define(
    "installations",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      fornecedor: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'dataProvider',
      },
      dataInstalacao: {
        allowNull: true,
        type: DataTypes.DATE,
        field: 'installationDate',
      },
      potenciaSistema: {
        allowNull: false,
        type: DataTypes.DECIMAL,
        field: 'systemSize',
      },
      cep: {
        allowNull: true,
        type: DataTypes.INTEGER(5),
        field: 'zipCode',
      },
      estadoSigla: {
        allowNull: false,
        type: DataTypes.STRING(2),
        field: 'state',
      },
      custo: {
        allowNull: false,
        type: DataTypes.DECIMAL,
        field: 'cost',
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    },
    {
      tableName: "installations",
      timestamps: true
    }
  );

  return Installations;
};
