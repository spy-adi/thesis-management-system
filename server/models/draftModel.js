module.exports = (sequelize,DataTypes)=>{
    const Draft = sequelize.define("draft",{
        id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        title:{
            type:DataTypes.TEXT,
            allowNull:false
        },
        abstract: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        file:{
            type:DataTypes.TEXT,
            allowNull:false
        },
        synopsis: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
    });
   return Draft; 
};
