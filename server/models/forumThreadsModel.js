module.exports = (sequelize,DataTypes)=>{
    const ForumThread = sequelize.define("forum_thread",{
        title:{
           type:DataTypes.TEXT,
           allowNull:false
        },
        desc:{
            type:DataTypes.TEXT,
            allowNull:false
        },
        posted_by:{
            type:DataTypes.ENUM,
            values:["scholar","professor"],
            allowNull:false
        },
        posted_by_id:{
            type:DataTypes.TEXT,
            allowNull:false
        },
        posted_by_name:{
            type:DataTypes.TEXT,
            allowNull:false
        }
    });
    return ForumThread;
}