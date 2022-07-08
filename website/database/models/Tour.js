module.exports = (sequelize, dataTypes) => {
    let alias = 'Tour';
    let cols = {
        id: {
            type: dataTypes.BIGINT(10),
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: dataTypes.VARCHAR(200),
            allowNull: false
        },
        shortDescription: {
            type: dataTypes.VARCHAR(110),
            allowNull: false
        },
        longDescription: {
            type: dataTypes.VARCHAR(200),
            allowNull: false
        },
        price: {
            type: dataTypes.BIGINT(),
            allowNull: false
        },
        duration: {
            type: dataTypes.BIGINT(),
            allowNull: false
        },
        image1: {
            type: dataTypes.VARCHAR(100),
            allowNull: false
        },
        image2: {
            type: dataTypes.VARCHAR(100),
            allowNull: false
        },
        image3: {
            type: dataTypes.VARCHAR(100),
            allowNull: false
        }
        
    };
    let config = {
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false
    }
    const Tour = sequelize.define(alias, cols, config); 

    Tour.associate = (models) => {
        Tour.belongsTo(models.Sale_Tour, {
            as: 'sold',
            foreignKey: 'tour_id'
        })
    }
 
    return Tour
};