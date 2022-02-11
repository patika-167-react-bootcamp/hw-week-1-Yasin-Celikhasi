/* 
    HW-2
    Array.includes() write a new method includesCI() that works like Array.includes() but it is case insensitive.
*/

Array.prototype.includesCI = function (param) {
  if(typeof param === 'string'){  // check the type of param
    return this.some((item) => item.toUpperCase() === param.toUpperCase()); // if param is string, convert to Uppercase and check
  }
  return false;
};

// Checking the result
const fruits = ["Banana", "Orange", "Apple", "Mango", 12];
console.log(fruits.includesCI('oRanGe')); // true
