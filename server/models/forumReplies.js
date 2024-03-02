module.exports = (sequelize,DataTypes)=>{
    const ForumReplies = sequelize.define("forum_reply",{
        content:{
            type:DataTypes.TEXT,
            allowNull:false
        },
        // upvotes:{
        //     type:DataTypes.INTEGER
        // },
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
    return ForumReplies;
}