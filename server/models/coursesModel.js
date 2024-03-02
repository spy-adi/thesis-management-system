module.exports = (sequelize,DataTypes)=>{
    const Course = sequelize.define("course",{
        course_code:{
            type:DataTypes.STRING,
            allowNull:false,
            primaryKey: true,
        },
        course_name:{
            type:DataTypes.TEXT,
            allowNull:false
        },
        department:{
            type:DataTypes.TEXT,
            allowNull:false
        },
        details:{
            type:DataTypes.TEXT,
            allowNull:false
        },
        course_structure_url:{
            type:DataTypes.TEXT,
            allowNull:false
        }
    });
    return Course;
}