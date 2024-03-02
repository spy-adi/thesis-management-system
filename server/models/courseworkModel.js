module.exports = (sequelize, DataTypes) => {
  const Coursework = sequelize.define("coursework", {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    scholarId: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: "scholars",
        key: "admn",
      },
    },
    course_code: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: "courses",
        key: "course_code",
        as: "courses",
      },
    },
    instructorId: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: "professors",
        key: "profId",
      },
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
    status: {
      type: DataTypes.ENUM,
      values: ["proposed", "waived off", "final"],
      allowNull: false,
    },
  });

  return Coursework;
};
