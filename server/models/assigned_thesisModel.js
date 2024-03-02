module.exports = (sequelize,DataTypes)=>{
    const Assigned_Thesis = sequelize.define("assigned_thesis",{
        title:{
            type:DataTypes.TEXT,
            allowNull:false
        },
        thesis_submission_date:{
            type:DataTypes.DATE
        },
        completed:{
            type:DataTypes.DATE
        },
        published:{
            type:DataTypes.DATE
        },
        start_date:{
            type:DataTypes.DATE
        },
        phd_degree:{
            type:DataTypes.ENUM,
            values:["awarded","pending"],
            allowNull:false
        }

    });
    return Assigned_Thesis;
}

