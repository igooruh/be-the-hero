const crypto = require('crypto')

const connection = require('../database/connection')

const index = async(request, response) => {
    const listOngs = await connection('ongs').select('*')

    return response.json(listOngs)
}

const create = async(request, response) => {
    const { name, email, whatsapp, city, uf} = request.body
    const id = crypto.randomBytes(4).toString('HEX')

    await connection('ongs').insert({
        id, name, email, whatsapp, city, uf
    })

    return response.json({ id })
}

module.exports = {
    index,
    create
}