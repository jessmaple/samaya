module.exports = function (sequelize, DataTypes) {
    const Video = sequelize.define("Video", {
        URL: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        tags: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        startTime: {
            type: DataTypes.INTEGER,
            allowNull: false,

        },
        endTime: {
            type: DataTypes.INTEGER,
        }
    });
    return Video;
};
