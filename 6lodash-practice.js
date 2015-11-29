var _ = require("lodash");

var commentCounter = function (comments) {
  var userComments = [],
      groupedComments = _.groupBy(comments, "username");

  _.forEach(groupedComments, function (item, name) {
    userComments.push({
      username: name,
      comment_count: _.size(item)
    });
  });

  return _.sortBy(userComments, "comment_count").reverse();
}

module.exports = commentCounter;
