const users = require('./users/users.service.js');
const drivers = require('./drivers/drivers.service.js');
const goods = require('./goods/goods.service.js');
const points = require('./points/points.service.js');
const vehicles = require('./vehicles/vehicles.service.js');
const clients = require('./clients/clients.service.js');
const scales = require('./scales/scales.service.js');
module.exports = function (app) {
  app.configure(users);
  app.configure(drivers);
  app.configure(goods);
  app.configure(points);
  app.configure(vehicles);
  app.configure(clients);
  app.configure(scales);
};
