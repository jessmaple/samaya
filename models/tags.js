module.exports = function (sequelize, DataTypes) {
    const tags = sequelize.define("tags", {
        tagName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        tagId:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },

        urlId:{
            type: DataTypes.INTEGER,
            references: {
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

    tags.associate = function(models){
        tags.belongsTo(models.videos, {foreignKey: 'urlId'})
    }   
    return tags;
};
