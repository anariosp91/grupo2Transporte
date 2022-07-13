module.exports = (sequelize, dataTypes) => {
    let alias = 'Tour';
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            
        },
        title: {
            type: dataTypes.STRING(200),
           
        },
        short_description: {
            type: dataTypes.STRING(110),
           
        },
        long_description: {
            type: dataTypes.STRING(200),
            
        },
        price: {
            type: dataTypes.BIGINT(),
            
        },
        duration: {
            type: dataTypes.BIGINT(),
            
        },
        image1: {
            type: dataTypes.STRING(100),
            
        },
        image2: {
            type: dataTypes.STRING(100),
            
        },
        image3: {
            type: dataTypes.STRING(100),
            
        }
        
    };
    let config = {
        timestamps: false,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false
    }
    const Tour = sequelize.define(alias, cols, config); 

    Tour.associate = (models) => {
        Tour.hasMany(models.SaleTour, {
            as: 'sold',
            foreignKey: 'tour_id'
        })
    }
 
    return Tour
};