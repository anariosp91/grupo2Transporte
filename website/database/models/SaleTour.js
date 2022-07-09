module.exports = (sequelize, dataTypes) => {
    let alias = 'SaleTour';
    let cols = {
        id: {
            type: dataTypes.BIGINT().UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        tour_id: {
            type: dataTypes.BIGINT(),
            foreignKey: true,
            
        },
        quantity: {
            type: dataTypes.BIGINT(),
            
        },
       sales_id: {
            type: dataTypes.BIGINT(),
            foreignKey: true,
           
        },
        date_tour: {
            type: dataTypes.BIGINT(),
            
        }
        
    };
    let config = {
        tableName: 'sales_tour',
        timestamps: false,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false
    }
    const Sale_Tour = sequelize.define(alias, cols, config); 

    Sale_Tour.associate = (models) => {
        Sale_Tour.belongsTo(models.Tour, {
            as: 'tour',
            foreignKey: 'tour_id'
        }),
        Sale_Tour.belongsTo(models.Sale, {
            as: 'sales',
            foreignKey: 'sales_id'
        })
    }
    return Sale_Tour
};