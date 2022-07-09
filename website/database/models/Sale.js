module.exports = (sequelize, dataTypes) => {
    let alias = 'Sale';
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: dataTypes.BIGINT(10),
            foreignKey: true,
            
        },
        total: {
            type: dataTypes.BIGINT(),
            
        },
        date: {
            type: dataTypes.DATE(),
            
        },
        
    };
    let config = {
        timestamps: false,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false
    }
    const Sale = sequelize.define(alias, cols, config); 

    Sale.associate = (models) => {
        Sale.belongsTo(models.User, {
            as: 'user',
            foreignKey: 'user_id'
        }),
        Sale.hasMany(models.SaleTour, {
            as: 'tours',
            foreignKey: 'sales_id'
        })
    }
 
    return Sale
};