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
    return tags;
};
