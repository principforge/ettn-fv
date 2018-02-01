// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

const S = require('string');

module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
  return async context => {
    const { data } = context;
    let { firstName, middleName, lastName } = data;

    // Throw an error if we didn't get a first name
    if(S(firstName).isEmpty()) {
      throw new Error('A driver must have a first name');
    }

    // Throw an error if we didn't get a middle name
    if(S(middleName).isEmpty()) {
      throw new Error('A driver must have a middle name');
    }

    // Throw an error if we didn't get a middlastle name
    if(S(lastName).isEmpty()) {
      throw new Error('A driver must have a last name');
    }

    firstName = S(firstName).trim().left(100).capitalize().s;
    middleName = S(middleName).trim().left(100).capitalize().s;
    lastName = S(lastName).trim().left(100).capitalize().s;

    // Set the user full name
    const fullName = lastName + ' ' + middleName + ' ' + firstName;

    // The authenticated user
    const user = context.params.user;

    // Override the original data (so that people can't submit additional stuff)
    context.data = {
      firstName,
      middleName,
      lastName,
      fullName,
      // Set the user id
      userId: user._id
    };

    return context;
  };
};
