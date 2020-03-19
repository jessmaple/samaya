module.exports = function (sequelize, DataTypes) {
    const Tags = sequelize.define("Tags", {
        tag1: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        tag2: {
            type: DataTypes.STRING,
            validate: {
                len: [1]
            }
        },
        tag3: {
            type: DataTypes.STRING,
            validate: {
                len: [1]
            }
        },
        tag4: {
            type: DataTypes.STRING,
            validate: {
                len: [1]
            }
        },
        tag5: {
            type: DataTypes.STRING,
            validate: {
                len: [1]
            }
        },
       
    });
    return Tags;
};
