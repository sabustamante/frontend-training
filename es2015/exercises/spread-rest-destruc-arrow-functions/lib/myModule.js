'use strict';
var myModule = {

  // it should receive infinite number of params and return the sum
  sum: function(sum = 0, ...values) {
    values.forEach((value) => {
        sum += value;
    });
    return sum;
  },

  // it should receive an array of integers and return the sum of all the values
  sumArray: function(values = []) {
      return this.sum(...values);
  },

  // it should receive an array of array of integers and return the sum of all the values
  sumArrayOfArrays: function(values = []) {
      var sum = 0;

      values.forEach((value) => {
          sum += this.sumArray(value);
      });
      return sum;
  },

  // the method pluck is a variant of the "map" array method
  // but it assumes the array contains only objects and receives a second
  // parameter to extract
  // pluck([{ a:1, b:2}, {a: 'hi', b:'hello'}, {a: 3, b:4}], 'a') =====> [1,'hi',3]
  pluck: function(objects, key) {
    // hint1: use computed property names (enhanced object literals)
    // to destructure dynamic keys
    // hint2: if you want to destructure parameters of an arrow
    // function, you will need to use parenthesis. example:
    // var fn = ({someKey: variableName}) => variableName;

    // return objects.map(({key: value}) => {
    //     value
    // });
  }
};

module.exports = myModule;
