module.exports = (sequelize, DataTypes) => {
  const CourseWaiverRequests = sequelize.define("course_waiver_requests", {
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
    semester: {
      type: DataTypes.ENUM,
      values: ["Monsoon", "Winter", "Summer"],
      allowNull: false,
    },
    session: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    file: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM,
      values: ['pending', 'cleared'],
      allowNull: false,
    },
  });

  return CourseWaiverRequests;
};
