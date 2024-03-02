module.exports = (sequelize,DataTypes)=>{
    const Dsc = sequelize.define("dsc",{
        // chairman:{
        //     type:DataTypes.STRING(20),
        //     allowNull:false,
        // //     references:{
        // //         key:"name"
        // //      }
        // },
        // member1:{
        //     type:DataTypes.STRING(20),
        //     // references:{
        //     //     key:"name"
        //     //  }
        // },
        // member2:{
        //     type:DataTypes.STRING(20),
        //     // references:{
        //     //     key:"name"
        //     //  }
        // },
        // member3:{
        //     type:DataTypes.STRING(20),
        //     // references:{
        //     //     key:"name"
        //     //  }
        // },
        // member4:{
        //     type:DataTypes.STRING(20),
        //     // references:{
        //     //     key:"name"
        //     //  }
        // },
        // member5:{
        //     type:DataTypes.STRING(20),
        //     // references:{
        //     //     key:"name"
        //     //  }
        // }
        designation:{
            type:DataTypes.TEXT,
            allowNull:false
        },
        areaofspecialization:{
            type:DataTypes.TEXT,
            allowNull:false
        },
        memberdepartment:{
            type:DataTypes.TEXT,
            allowNull:false
        },
        sisterdepartment:{
            type:DataTypes.TEXT,
            allowNull:false
        }
        

    });
    return Dsc;
}