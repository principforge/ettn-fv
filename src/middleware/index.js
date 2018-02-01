const handler = require('feathers-errors/handler');
const notFound = require('feathers-errors/not-found');
const { render } = require('./nuxt'); // <- Require the middleware

module.exports = function (app) { // eslint-disable-line no-unused-vars
  // Use Nuxt's render middleware
  app.use((req, res, next) => {
    switch (req.accepts('html', 'json')) {
    case 'json': {
      next();
      break;
    }
    default: {
      render(req, res, next);
    }
    }
  });

  app.use(notFound());
  app.use(handler());
};
