"use strict";

Function.prototype.myBind = function (thisArg, ...boundArgs) {
  const originalThis = this;
  return function (...newArgs) {
    return Reflect.apply(originalThis, thisArg, [...boundArgs, ...newArgs]);
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
