module.exports = (sequelize,DataTypes)=>{
    const Examiner = sequelize.define("examiner",{
        examinerId:{
            type:DataTypes.STRING,
            allowNull:false,
            primaryKey:true   
        },
        name:{
            type:DataTypes.STRING(200),
            allowNull:false
        },
        email:{
            type:DataTypes.TEXT,
            allowNull:false
        },
        password:{
            type:DataTypes.STRING,
            allowNull:false
        },
        contact:{
            type:DataTypes.TEXT,
            allowNull:false
        },
        address:{
            type:DataTypes.TEXT,
            allowNull:false
        },
        institute:{
            type:DataTypes.TEXT,
            allowNull:false
        },
        photo:{
            type:DataTypes.TEXT
        },
        indianorforeign :{
            type:DataTypes.ENUM,
            values:["Indian","Foreign"],
            allowNull:false
        },
        requestDate:{
            type:DataTypes.DATE
        },
        consent:{
            type:DataTypes.ENUM,
            values:["S","X","pending"]
        },
        consentResponseDate:{
            type:DataTypes.DATE
        },
        dueDate:{
            type:DataTypes.DATE
        },
        thesis_evaluation_status:{
            type:DataTypes.ENUM,
            values:["evaluated","pending"]
        }


    })
    return Examiner;
}