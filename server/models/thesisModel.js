module.exports = (sequelize,DataTypes)=>{
    const Thesis = sequelize.define("thesis",{
        title:{
            type:DataTypes.TEXT,
            allowNUll:false
        },
        description:{
            type:DataTypes.TEXT,
            allowNUll:false
        },
        tags:{
            type:DataTypes.TEXT,
            allowNUll:false
        },
        file:{
            type:DataTypes.TEXT,
            allowNUll:false
        },
        file_created:{
            type:DataTypes.DATE,
            allowNUll:false
        },
        assigned:{
            type:DataTypes.BOOLEAN,
            allowNUll:false
        },
        approval_status:{
            type:DataTypes.BOOLEAN,
            allowNULL:false
        }


    });
    return Thesis;
}