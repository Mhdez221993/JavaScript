"use strict";

Function.prototype.myBind = function (thisArg, ...boundArgs) {
  const originalThis = this;
  return function (...newArgs) {
    const allArgs = boundArgs.concat(Array.prototype.slice.call(newArgs));
    return originalThis.apply(thisArg, allArgs);
  };
};

const john = {
  age: 42,
  getAge: function () {
    return this.age;
  },
};

// const unboundGetAge = john.getAge;
// console.log(unboundGetAge()); // undefined

const boundGetAge = john.getAge.myBind(john);
console.log(boundGetAge()); // 42
