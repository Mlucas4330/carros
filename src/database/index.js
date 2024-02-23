const DataSource = require('typeorm').DataSource
const dotenv = require('dotenv')
const path = require('path')

dotenv.config()

// console.log(path.join(__dirname, 'entities'))

module.exports = new DataSource({
    type: 'postgres',
    port: 5432,
    host: 'localhost',
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    entities: [path.join(__dirname, 'entities/*.js')],
    migrations: [path.join(__dirname, 'migrations/*.js')]
})