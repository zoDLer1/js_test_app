import Sequelize from 'sequelize'
import process from 'process';
import cfg from '../config/config.js';
import postModel from './post.js';
import authorModel from './author.js';


const env = process.env.NODE_ENV || 'development';
const config = cfg[env];

let sequelize;
if (config.use_env_variable){
	sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
	sequelize = new Sequelize(config.database, config.username, config.password, config);
}

export const Author = authorModel(sequelize)

export const Post = postModel(sequelize)

Post.belongsTo(Author, { as: "author_info", foreignKey: "author" });
Author.hasMany(Post, { as: "posts", foreignKey: "author" });

export default sequelize;
