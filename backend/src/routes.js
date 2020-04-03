const express = require('express');
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');
const DriverController = require('./controllers/DriverController');
const PeopleController = require('./controllers/PeopleController');
const ClientController = require('./controllers/ClientController');

const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.post('/ongs', OngController.create);
routes.get('/ongs', OngController.index);

routes.get('/profile', ProfileController.index);

routes.post('/incidents', IncidentController.create);
routes.get('/incidents', IncidentController.index);
routes.delete('/incidents/:id', IncidentController.delete);

routes.post('/pessoas', PeopleController.create);
routes.get('/pessoas', PeopleController.index);

routes.post('/motoristas', DriverController.create);
routes.get('/motoristas', DriverController.index);

routes.post('/clientes', ClientController.create);
routes.get('/clientes', ClientController.index);

module.exports = routes;