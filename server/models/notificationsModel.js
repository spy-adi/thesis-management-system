module.exports = (sequelize, DataTypes) => {
    const Notifications = sequelize.define("notifications", {
        id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        target: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        title: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        status: {
            type: DataTypes.ENUM,
            values: ["read", "unread"],
            allowNull: false,
        },
        view_url: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
    });

    return Notifications;
};