'use strict';
const utils = {
  // it should receive an iterable element and call the received function with each element
  // of the iterable object
  forEach(iterable, fn) {
      for (let element of iterable) {
          fn(element);
      }
  },

  // it should receive an infinite number or parameters and return the multiplication of all
  // do not use "forEach", "map" or "reduce"
  multiply(...numbers) {
      let result = 1;

      if (numbers.length < 1) {
          throw 'Error: no parameter is received.'
      }

      for (let number of numbers) {
          if (typeof number != 'number') {
              throw 'Error: passing a string, boolean, or object.';
          }
          result *= number;
      }
      return result;
  },

  // it should return an array of arrays, each array element will have only two elements,
  // the first one representing the key names and the second one its values
  // it should also check if the given parameters it's an object and throw an error otherwise
  // Example: entries({a:1, b:2, c:3}) === [['a',1], ['b', 2], ['c',3]]
  entries(obj) {
      let result = [];

      if (typeof obj != 'function' && (obj === null || typeof obj != 'object')) {
          throw 'Error: receives a non-object or null argument.';
      }

      for (let key in obj) {
          result.push([key, obj[key]]);
      }
      return result;
  },

  // it should return the same object, adding the functionality to be consumed as an iterable
  // it should also check if the given parameters it's an object and throw an error otherwise
  // Example:
  // for (let x of makeIterable({a:1,b:2})) {
  //   console.log(x);
  // }
  // should print ['a',1], ['b', 2]
  makeIterable(obj) {
      let that = this;

      obj[Symbol.iterator] = function () {
          let i = 0;
          let items = that.entries(obj);

          return {
              next: function () {
                  let value = items[i++];

                  return {
                      value: value == undefined ? null : value,
                      done: i === items.length + 1
                  };
              }
          }
      };
      return obj;
  }
};


module.exports = utils;
