const assert = require('assert');
const app = require('../../src/app');

describe('\'scales\' service', () => {
  it('registered the service', () => {
    const service = app.service('scales');

    assert.ok(service, 'Registered the service');
  });
});
