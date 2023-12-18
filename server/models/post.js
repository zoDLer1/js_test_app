import { DataTypes } from "sequelize";


export default (sequelize) => sequelize.define('Post', {
    id: {
        autoIncrement: true,
        autoIncrementIdentity: true,
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true
    },
    label: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    author: {
        type: DataTypes.BIGINT,
        allowNull: false,
        references: {
            model: 'authors',
            key: 'id'
        }
    }
}, {
    sequelize,
    tableName: 'posts',
    schema: 'public',
    timestamps: true,
    indexes: [
        {
            name: "posts_pkey",
            unique: true,
            fields: [
                { name: "id" },
            ]
        },
    ]
});
