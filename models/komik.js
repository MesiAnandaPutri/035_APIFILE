module.exports = (sequelize, DataTypes) => {
  const Komik = sequelize.define(
    "Komik",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING,
      },
      description: {
        type: DataTypes.STRING,
      },
      author: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      ImageType: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      ImageName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      ImageData: {
        type: DataTypes.BLOB("long"),
        allowNull: false,
      },
    },
    {
      tableName: "komik",
    }
  );

  return Komik;
};