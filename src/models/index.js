const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config();

const buildSequelizeFromDbVars = () => {
  if (process.env.DB_NAME) {
    return new Sequelize(
      process.env.DB_NAME,
      process.env.DB_USER || 'postgres',
      process.env.DB_PASSWORD || 'password',
      {
        host: process.env.DB_HOST || 'localhost',
        port: process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : 5432,
        dialect: 'postgres',
        logging: false,
      }
    );
  }
  return null;
};

const connectionString = process.env.DATABASE_URL;

let sequelize;
if (connectionString) {
  sequelize = new Sequelize(connectionString, {
    dialect: 'postgres',
    protocol: 'postgres',
    logging: false,
    dialectOptions: process.env.NODE_ENV === 'production' ? { ssl: { rejectUnauthorized: false } } : {},
  });
} else {
  sequelize = buildSequelizeFromDbVars() || new Sequelize(
    process.env.PGDATABASE || 'userdb',
    process.env.PGUSER || 'postgres',
    process.env.PGPASSWORD || 'password',
    {
      host: process.env.PGHOST || 'localhost',
      port: process.env.PGPORT ? parseInt(process.env.PGPORT, 10) : 5432,
      dialect: 'postgres',
      logging: false,
    }
  );
}

const User = require('./user')(sequelize, DataTypes);

module.exports = {
  sequelize,
  Sequelize,
  User,
};
