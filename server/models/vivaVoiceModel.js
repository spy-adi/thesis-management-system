module.exports = (sequelize,DataTypes)=>{
    const VivaVoice = sequelize.define("viva_voice",{
        date:{
            type:DataTypes.DATE,
            allowNull:false
        },
        status:{
            type:DataTypes.ENUM,
            values:["S","X","pending"],
            allowNull:false
        },
        rep_url:{
            type:DataTypes.TEXT,
            allowNull:false
        }

    });
    return VivaVoice;
}