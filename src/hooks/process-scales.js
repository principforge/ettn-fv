// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

const S = require('string');

module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
  return async context => {
    const { data } = context;
    let { name, url, socketPort, socketEvent } = data;

    // Throw an error if we didn't get a name
    if(S(name).isEmpty()) {
      throw new Error('A client must have a name');
    }

    name = S(name).trim().left(100).s.toUpperCase();

    // Throw an error if we didn't get a url
    if(S(url).isEmpty()) {
      throw new Error('A scales must have a url');
    }

    // Throw an error if we didn't get a socket port
    if(S(socketPort).isEmpty()) {
      throw new Error('A scales must have a socket port');
    }

    socketPort = socketPort.match(/\d/g).join('');

    // Throw an error if we didn't get a socket event
    if(S(socketEvent).isEmpty()) {
      throw new Error('A scales must have a socket event');
    }

    // The authenticated user
    const user = context.params.user;

    // Override the original data (so that people can't submit additional stuff)
    context.data = {
      name,
      url,
      socketPort,
      socketEvent,
      // Set the user id
      userId: user._id
    };

    return context;
  };
};
