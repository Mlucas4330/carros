const express = require('express')
const carrosRouter = require('./routes/carrosRouter')
const cors = require('cors')
const json = require('express').json
const dataSource = require('./database/index.js')

const app = express()
const main = async () => {
    try {
        app.use(cors())
        app.use(json())

        await dataSource.initialize()

        app.use('/api', [carrosRouter])

        app.listen(3000)
    } catch (error) {
        console.log(error)
    }
}

main()