module.exports = (sequelize, DataTypes) => {
  const OverallThesisRep = sequelize.define("overall_thesis_rep", {
    session: {
      type: DataTypes.TEXT,
    },
    semester: {
      type: DataTypes.ENUM,
      values: ['Monsoon', 'Winter'],
      allowNull: false,
    },
    file: {
      type: DataTypes.TEXT,
    },
  });

  return OverallThesisRep;
};
