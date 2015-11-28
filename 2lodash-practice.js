var _ = require("lodash");

var worker = function(articles) {
 return _.sortBy(articles, function(article) {
   return 1 / article.quantity;
 });
};

module.exports = worker;
