Array.prototype.myFilter = function (callbackFn, thisArg) {
  let newArr = [];
  for (let i = 0; i < this.length; i++) {
    if (callbackFn(this[i])) {
      newArr.push(this[i]);
    }
  }

  return newArr;
};

console.log([1, 2, 3, 4].myFilter((value) => value < 3));
