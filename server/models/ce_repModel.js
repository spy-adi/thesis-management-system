module.exports = (sequelize,DataTypes)=>{
    const Ce_Rep = sequelize.define("ce_rep",{
        session:{
            type:DataTypes.TEXT
        },
        semester:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        date1:{
            type:DataTypes.DATE,
            allowNull:false
        },
        result1:{
            type:DataTypes.ENUM,
            values:["S","X","pending"],
            allowNull:false
        },
        rep1_url:{
            type:DataTypes.TEXT,
            allowNull:false
        },
        date2:{
            type:DataTypes.DATE
        },
        result2:{
            type:DataTypes.ENUM,
            values:["S","X","pending"],
        },
        rep2_url:{
            type:DataTypes.TEXT
        }

    });
    return Ce_Rep;
}