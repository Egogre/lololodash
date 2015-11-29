var _ = require("lodash");

var loginCounter = function(userLogins) {
  return _.template('Hello <%= userName %> (logins: <%= loginCount %>)')({ loginCount: userLogins.login.length, userName: userLogins.name });
};

module.exports = loginCounter;
