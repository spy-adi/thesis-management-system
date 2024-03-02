module.exports = (sequelize,DataTypes)=>{
    const Scholar = sequelize.define("scholar",{
        admn:{ //
            type:DataTypes.STRING,
            allowNull:false,
            primaryKey:true
        },
        name:{
            type:DataTypes.TEXT,
            allowNull:false
        },
        photo:{
            type:DataTypes.TEXT,
        },
        password:{
            type:DataTypes.STRING,
            // allowNull:false
        },
        department:{
            type:DataTypes.TEXT,
            allowNull:false
        },
        branch:{
            type:DataTypes.TEXT,
            allowNull:false
        },
        email:{
            type:DataTypes.TEXT,
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
        registration_type:{
            type:DataTypes.ENUM,
            values:["full","part","external"],
            allowNull:false
        },
        qualification_degree:{
            type:DataTypes.TEXT,
            allowNull:false
        },
        status:{
            type:DataTypes.ENUM,
            values:["active","terminated","graduated"],
            allowNull:false
        },
        fellowship_status:{
            type:DataTypes.ENUM,
            values:["JRF","SRF"],
            allowNull:false
        },
        registration_date:{
            type:DataTypes.DATE,
            allowNull:false
        },
        current_semester:{
            type:DataTypes.ENUM,
            values:["Monsoon","Winter","Summer"],
            allowNull:false
        },
        current_session:{
            type:DataTypes.TEXT, 
            allowNull:false
        }


    });
    
    return Scholar;
};
// {
//     "admn":"19JE0599",
//     "name":"darshantejha",
//     "password":"qwertyu",
//     "department":"btech",
//     "email":"darshantejha3@gmail.com",
//     "contact":"9652250847",
//     "address":"hyderabad",
//     "registration_type":"full",
//     "qualification_degree":"mtech",
//     "status":"active",
//     "fellowship_status":"JRF",
//     "registration_date":"2021-12-14"
// }