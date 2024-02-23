const carroEntity = require('../database/entities/carroEntity')
const dataSource = require('../database/index.js')

module.exports = dataSource.getRepository(carroEntity)