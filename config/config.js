require('dotenv').config();

module.exports = {
  test: {
    dialect: process.env.DATABASE_ENGINE,
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    logging: (process.env.APPLICATION_DEBUG === 'true'),
  },
  development: {
    dialect: 'mysql',
    host: 'eu-cdbr-west-03.cleardb.net',
    port: 3306,
    username: 'b22aa860547d73',
    password: '0ee164a3',
    database: 'heroku_8277bab62a54ba1',
  },
};
