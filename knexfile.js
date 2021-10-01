require('dotenv').config()

const localPg = {
  host: 'localhost',
  port: 5432, // You may need/want to change this
  database: 'shopping_list',
  user: 'zaur', // User and pass may be different for you
  password: ""  
}


module.exports = {
  development: {
    client: 'pg',
    useNullAsDefault: true,
    connection: localPg,
    migrations: {
      directory: './database/migrations',
    },
    seeds: {
      directory: './database/seeds',
    },
  },


  production: {
    client: 'pg',
    useNullAsDefault: true,
    connection: process.env.DATABASE_URL, 
    migrations: {
      directory: './database/migrations',
    },
    seeds: {
      directory: './database/seeds',
    },
  },


  testing: {
    client: 'sqlite3',
    connection: {
      filename: './database/tester.db3',
    },
    useNullAsDefault: true,
    migrations: {
      directory: './database/migrations',
    },
    seeds: {
      directory: './database/seeds',
    },
  },
}