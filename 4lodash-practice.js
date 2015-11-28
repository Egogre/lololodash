var _ = require('lodash');

var worker = function(towns) {
  var result = {
    hot: [],
    warm: []
  };

  function hot (towns) {
    return towns > 19;
  };

  _.forEach(towns, function(town, name) {
    if (_.every(town, hot)) {
      result.hot.push(name);
    } else if (_.some(town, hot)) {
      result.warm.push(name);
    }
  });

  return result;
};

module.exports = worker;
