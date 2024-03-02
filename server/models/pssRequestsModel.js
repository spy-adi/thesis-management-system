module.exports = (sequelize, DataTypes) => {
  const PssRequests = sequelize.define("pss_requests", {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    scholarId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    supervisor: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    file: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM,
      values: ["pending", "approved", "rejected"],
      allowNull: false,
    },
  });

  return PssRequests;
};
