module.exports = (sequelize, dataTypes) => {
    let alias = 'User';
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        
        name: {
            type: dataTypes.STRING(100),
            
        },
        last_name: {
            type: dataTypes.STRING(100),
           
        },
        phone: {
            type: dataTypes.BIGINT(20),
            
        },
        email: {
            type: dataTypes.STRING(100),
            
        },
        password: {
            type: dataTypes.STRING(100),
            
        },
        image: {
            type: dataTypes.STRING(100),
            
        },
        admin: {
            type: dataTypes.TINYINT(),
            
        }
    };
    let config = {
        timestamps: false,
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