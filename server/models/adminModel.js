module.exports = (sequelize,DataTypes)=>{
    const Admin = sequelize.define("admin",{
        adminId:{
            type:DataTypes.STRING,
            allowNull:false,
            primaryKey:true
        },
        name:{
            type:DataTypes.STRING,
            allowNull:false
        },
        password:{
            type:DataTypes.STRING,
            allowNull:false
        },
        photo: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        email:{
            type:DataTypes.STRING
        },
       
    });
    return Admin;
}