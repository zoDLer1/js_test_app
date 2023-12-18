import { DataTypes } from "sequelize";


export default (sequelize) => sequelize.define('Author', {
    id: {
        autoIncrement: true,
        autoIncrementIdentity: true,
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    stars: {
        type: DataTypes.DECIMAL,
        allowNull: false
    }
}, {
    sequelize,
    tableName: 'authors',
    schema: 'public',
    timestamps: true,
    indexes: [
        {
            name: "autors_pkey",
            unique: true,
            fields: [
                { name: "id" },
            ]
        },
    ]
});
