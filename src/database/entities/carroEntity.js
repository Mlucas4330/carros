const EntitySchema = require('typeorm').EntitySchema
module.exports = new EntitySchema({
    name: "Carro",
    tableName: "carros",
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true
        },
        marca: {
            type: "varchar"
        },
        modelo: {
            type: "varchar"
        },
        ano: {
            type: "int"
        },
        cor: {
            type: "varchar"
        }
    }
})