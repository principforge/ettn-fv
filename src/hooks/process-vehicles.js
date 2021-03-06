// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

const S = require('string');

module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
  return async context => {
    const { data } = context;
    let { name, type } = data;

    // Throw an error if we didn't get a name
    if(S(name).isEmpty()) {
      throw new Error('A vehicle must have a name');
    }

    name = S(name).trim().left(100).s.toUpperCase();

    if(S(type).isEmpty()) {
      type = 'AUTHOMOBILE';
    }

    // The authenticated user
    const user = context.params.user;

    // Override the original data (so that people can't submit additional stuff)
    context.data = {
      name,
      type,
      // Set the user id
      userId: user._id
    };

    return context;
  };
};
