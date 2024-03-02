module.exports = (sequelize,DataTypes) =>{
    const Fsbs = sequelize.define("fsbs",{
        PH2:{
            type:DataTypes.TEXT,
        },
        PH3:{
            type:DataTypes.TEXT,
        },
        PH8:{
            type:DataTypes.TEXT,
        },
        PH10:{
            type:DataTypes.TEXT,
        },
        PH11:{
            type:DataTypes.TEXT,
        },
        PH12:{
            type:DataTypes.TEXT,
        },
        PH13:{
            type:DataTypes.TEXT,
        },
        PH15:{
            type:DataTypes.TEXT,
        },
        PH16:{
            type:DataTypes.TEXT,
        },
        PH17:{
            type:DataTypes.TEXT,
        },
        PH18:{
            type:DataTypes.TEXT,
        },
    });
    return Fsbs;
}