var _ = require("lodash");

var totalOrderCalculator = function (articleOrders) {

    var articleOrderTotals = [],
        total = 0;

    articleOrders = _.groupBy(articleOrders, 'article');

    _.forEach(articleOrders, function (articleQuantities, articleID) {

        articleID = parseInt(articleID);
        total = 0;

        if (articleQuantities.length === 1) {
            total = articleQuantities[0].quantity;

        } else {
            total = _.reduce(articleQuantities, function(sum, articleQuantities) {
                return sum + articleQuantities.quantity;
            }, 0);
        }

        articleOrderTotals.push({
            article: articleID,
            total_orders: total
        });

    });

    articleOrderTotals = _.sortBy(articleOrderTotals, "total_orders").reverse();

    return articleOrderTotals;
};

module.exports = totalOrderCalculator;
