const carroRepository = require('../repositories/carroRepository')
const carroValidator = require('../validators/carroValidator')

const index = async (_req, res) => {
    const carros = await carroRepository.find()

    if (carros.length < 1) {
        return res.status(400).json({
            status: 400,
            message: error.message
        })
    }

    res.json({
        data: carros,
        message: 'Carros encontrados com sucesso'
    })
}

const view = async (req, res) => {
    const carro = await carroRepository.findBy({ id: req.params.id })

    res.send({
        message: 'Carro encontrado com sucesso',
        data: carro
    })
}

const create = async (req, res) => {
    const { error, value } = carroValidator.validate(req.body)

    if (error) {
        return res.status(400).json({
            status: 400,
            message: error.message
        })
    }

    const carro = carroRepository.create(value)

    await carroRepository.save(carro)

    res.status(201).json({
        status: 201,
        message: 'Carro criado com sucesso'
    })
}

const update = async (req, res) => {
    const { error, value } = carroValidator.validate(req.body)

    if (error) {
        return res.status(400).json({
            status: 400,
            message: error.message
        })
    }

    const isUpdated = await carroRepository.update({
        id: req.params.id
    }, {
        modelo: value.modelo,
        ano: value.ano,
        cor: value.cor,
        marca: value.marca
    })

    if (!isUpdated) {
        return res.send({
            message: 'Erro ao editar'
        })
    }

    res.send({
        message: 'Carro atualizado com sucesso'
    })
}

const destroy = async (req, res) => {
    const isDeleted = await carroRepository.delete(req.params.id)

    if (!isDeleted) {
        return res.send({
            message: 'Erro ao deletar'
        })
    }

    res.send({
        message: 'Carro deletado com sucesso'
    })
}

module.exports = { index, view, create, update, destroy }