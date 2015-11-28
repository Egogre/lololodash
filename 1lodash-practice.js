// include the Lo-Dash library
var thing = require("lodash");

var worker = function(users) {
  return thing.where(users, { "active": true });
};

// export the worker function as a nodejs module
module.exports = worker;
