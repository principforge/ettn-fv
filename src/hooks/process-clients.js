// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

const S = require('string');

module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
  return async context => {
    const { data } = context;
    let { name, code } = data;

    // Throw an error if we didn't get a name
    if(S(name).isEmpty()) {
      throw new Error('A client must have a name');
    }

    name = S(name).trim().left(100).s.toUpperCase();

    // Throw an error if we didn't get a code
    if(S(code).isEmpty()) {
      throw new Error('A client must have a code');
    }

    code = S(code.match(/\d/g).join('')).left(8).s;

    // The authenticated user
    const user = context.params.user;

    // Override the original data (so that people can't submit additional stuff)
    context.data = {
      name,
      code,
      // Set the user id
      userId: user._id
    };

    return context;
  };
};
