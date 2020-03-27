const connection = require('../database/connection')

const incidentOne = async(request, response) => {
    const ong_id = request.headers.authorization
    const incidentsId = await connection('incidents')
        .where('ong_id', ong_id)
        .select('*')

    return response.json(incidentsId)
}

module.exports = {
    incidentOne
}