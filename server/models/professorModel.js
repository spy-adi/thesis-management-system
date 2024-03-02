module.exports = (sequelize,DataTypes)=>{
    const Professor = sequelize.define("professor",{
        profId:{
            type:DataTypes.STRING,
            allowNull:false,
            primaryKey:true
        },
        name:{
            type:DataTypes.STRING(20),
            allowNull:false
        },
        password:{
            type:DataTypes.STRING,
            // allowNull:false
        },
        photo:{
            type:DataTypes.TEXT
            
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
        }

    });
    return Professor;
}
// {
//     "profId":"19PR0599",
//     "name":"darshantejha",
//     "password":"qwertyu",
//     "department":"btech",
//     "branch":"MNC",
//     "email":"darshantejha3@gmail.com",
//     "contact":"9652250847",
//     "address":"hyderabad"
    
// }