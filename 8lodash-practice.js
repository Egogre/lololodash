var _ = require("lodash");

var performance = function (employeeIncomes) {
  var average = _.reduce(employeeIncomes, function (sum, employeeIncome) {
    return sum += employeeIncome.income;
  }, 0) / employeeIncomes.length;

  var underperform = _.filter(employeeIncomes , function (employeeIncome) {
    return employeeIncome.income <= average;
  });

  var overperform = _.filter(employeeIncomes, function (employeeIncome) {
    return employeeIncome.income > average;
  });

  return {
    average: average,
    underperform: _.sortBy(underperform, "income"),
    overperform: _.sortBy(overperform, "income")
  };

};

module.exports = performance;
