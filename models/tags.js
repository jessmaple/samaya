module.exports = function (sequelize, DataTypes) {
    const tags = sequelize.define("tags", {
        tagName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        urlId:{
            type: DataTypes.INTEGER,
            references:{
                model: 'videos', 
                key: 'id'  
            }
       
        },
        startTime: {
            type: DataTypes.INTEGER,
            allowNull: false,

        },
        endTime: {
            type: DataTypes.INTEGER,
        }
    });

    tags.associate = function(models) {
        tags.belongsTo(models.videos, {
          foreignKey: {
            allowNull: false
          }
        })};

    tags.belongsTo(videos, {foreignKey: 'id'})
    return tags;
};
