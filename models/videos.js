module.exports = function (sequelize, DataTypes) {
    const videos = sequelize.define("videos", {
        url: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        }
    });

 
    videos.associate = function(models) {
        videos.hasMany(models.tags, {
            
        })};

    return videos;
};
