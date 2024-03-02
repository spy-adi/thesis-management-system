module.exports = (sequelize,DataTypes)=>{
    const SupervisorAllocation = sequelize.define("supervisor_allocation",{
        P1:{
            type:DataTypes.TEXT,
            allowNull:false
        },
        P2:{
            type:DataTypes.TEXT,
            allowNull:false
        },
        P3:{
            type:DataTypes.TEXT,
            allowNull:false
        },
        P4:{
            type:DataTypes.TEXT,
            allowNull:false
        },
        P5:{
            type:DataTypes.TEXT,
            allowNull:false
        },

    });
    return SupervisorAllocation;
}