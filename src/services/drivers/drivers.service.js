// Initializes the `drivers` service on path `/drivers`
const createService = require('feathers-nedb');
const createModel = require('../../models/drivers.model');
const hooks = require('./drivers.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'drivers',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/drivers', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('drivers');

  service.hooks(hooks);
};
