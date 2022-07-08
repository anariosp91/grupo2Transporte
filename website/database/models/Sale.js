module.exports = (sequelize, dataTypes) => {
    let alias = 'Sale';
    let cols = {
        id: {
            type: dataTypes.BIGINT(10),
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: dataTypes.BIGINT(10),
            foreignKey: true,
            allowNull: false
        },
        total: {
            type: dataTypes.BIGINT(),
            allowNull: false
        },
        date: {
            type: dataTypes.DATE(),
            allowNull: false
        },
        
    };
    let config = {
        timestamps: true,
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
        Sale.hasMany(models.Sale_Tour, {
            as: 'tours',
            foreignKey: 'sales_id'
        })
    }
 
    return Sale
};