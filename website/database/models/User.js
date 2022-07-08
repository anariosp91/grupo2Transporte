module.exports = (sequelize, dataTypes) => {
    let alias = 'User';
    let cols = {
        id: {
            type: dataTypes.BIGINT(10),
            primaryKey: true,
            autoIncrement: true
        },
        
        name: {
            type: dataTypes.VARCHAR(100),
            allowNull: false
        },
        last_name: {
            type: dataTypes.VARCHAR(100),
            allowNull: false
        },
        phone: {
            type: dataTypes.BIGINT(20),
            allowNull: false
        },
        email: {
            type: dataTypes.VARCHAR(100),
            allowNull: false
        },
        password: {
            type: dataTypes.VARCHAR(100),
            allowNull: false
        },
        image: {
            type: dataTypes.VARCHAR(100),
            allowNull: true
        },
        admin: {
            type: dataTypes.TINYINT(),
            allowNull: true
        }
    };
    let config = {
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false
    }
    const User = sequelize.define(alias, cols, config); 

    User.associate = (models) => {
        User.hasMany(models.Sale, {
            as: 'sales',
            foreignKey: 'user_id'
        })

    }
 
    return User
};