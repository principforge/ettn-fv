const assert = require('assert');
const app = require('../../src/app');

describe('\'points\' service', () => {
  it('registered the service', () => {
    const service = app.service('points');

    assert.ok(service, 'Registered the service');
  });
});
