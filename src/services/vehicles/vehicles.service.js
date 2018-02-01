// Initializes the `vehicles` service on path `/vehicles`
const createService = require('feathers-nedb');
const createModel = require('../../models/vehicles.model');
const hooks = require('./vehicles.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'vehicles',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/vehicles', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('vehicles');

  service.hooks(hooks);
};
