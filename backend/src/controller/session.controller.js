const connection = require('../database/connection')

const initSession = async(request, response) => {
    const { id } = request.body
    const ong = await connection('ongs')
        .where('id', id)
        .select('name')
        .first()

    const msg = { error: 'No ONG found with this ID' }
    const valitedOng = !ong ? response.status(400).json(msg) : response.json(ong)

    return valitedOng
}

module.exports = {
    initSession
}