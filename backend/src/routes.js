const express = require('express')

const ongController = require('./controller/ong.controller')
const incidentController = require('./controller/incident.controller')
const profileController = require('./controller/profile-incident.controller')
const sessionController = require('./controller/session.controller')

const routes = express.Router()

// Session
routes.post('/session', sessionController.initSession)

// ONG
routes.get('/ongs', ongController.index)
routes.post('/ongs', ongController.create)

// Incident
routes.post('/incidents', incidentController.insertIncident)
routes.get('/incidents', incidentController.listIncidentsAll)
routes.delete('/incidents/:id', incidentController.deleteIncident)

// Profile
routes.get('/profile', profileController.incidentOne)

module.exports = routes