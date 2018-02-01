const { authenticate } = require('@feathersjs/authentication').hooks;

const processClients = require('../../hooks/process-clients');

const populateUser = require('../../hooks/populate-user');

module.exports = {
  before: {
    all: [ authenticate('jwt') ],
    find: [],
    get: [],
    create: [processClients()],
    update: [processClients()],
    patch: [processClients()],
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
