module.exports = function (sequelize, DataTypes) {
    const videos = sequelize.define("videos", {
        url: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        id:{
            type: DataTypes.INTEGER,
        }
    });
    return videos;
};
