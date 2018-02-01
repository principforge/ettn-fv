// Initializes the `scales` service on path `/scales`
const createService = require('feathers-nedb');
const createModel = require('../../models/scales.model');
const hooks = require('./scales.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'scales',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/scales', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('scales');

  service.hooks(hooks);
};
