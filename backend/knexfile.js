// Update with your config settings.

module.exports = {

  development: {
    client: 'mysql',
    connection: {
      host : process.env.HOST_DB_MYSQL,
      user : process.env.USER_DB_MYSQL,
      password : process.env.PASS_DB_MYSQL,
      database : process.env.NAME_DB_MYSQL_EXPRESS
    },
    migrations:{
      directory:'./src/database/migrations'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
