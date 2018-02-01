const { authenticate } = require('@feathersjs/authentication').hooks;

const processGoods = require('../../hooks/process-goods');

const populateUser = require('../../hooks/populate-user');

module.exports = {
  before: {
    all: [ authenticate('jwt') ],
    find: [],
    get: [],
    create: [processGoods()],
    update: [processGoods()],
    patch: [processGoods()],
    remove: []
  },

  after: {
    all: [populateUser()],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
