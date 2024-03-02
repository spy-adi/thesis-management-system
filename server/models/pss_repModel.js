module.exports = (sequelize,DataTypes)=>{
    const Pss_Rep = sequelize.define("pss_rep",{
        published_paper_details:{
            type:DataTypes.TEXT,
            allowNull:false
        },
        plagarism_check:{
            type:DataTypes.BOOLEAN,
            allowNull:false
        },
        clearance:{
            type:DataTypes.BOOLEAN,
            allowNull:false
        },
        date:{
            type:DataTypes.DATE,
            allowNull:false
        },
        status:{
            type:DataTypes.ENUM,
            values:["S","X","pending"]
        },
        rep_url:{
            type:DataTypes.TEXT,
            allowNull:false
        }
    });
    return Pss_Rep;
}