// Initializes the `goods` service on path `/goods`
const createService = require('feathers-nedb');
const createModel = require('../../models/goods.model');
const hooks = require('./goods.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'goods',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/goods', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('goods');

  service.hooks(hooks);
};
