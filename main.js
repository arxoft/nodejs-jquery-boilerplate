var _ = require('lodash');

$(document).ready(function(){ 
  console.log(_.chunk(['a', 'b', 'c', 'd'], 2)); // [['a', 'b'], ['c', 'd']]
});
