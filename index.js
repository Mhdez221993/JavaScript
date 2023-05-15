Array.prototype.myMap = function (callbackFn, thisArg) {
  let newArr = [];
  let i = 0;
  let len = this.length;

  while (i < len) {
    if (Object.hasOwn(this, i)) {
      let newValue = callbackFn.call(thisArg, this[i], i, this);
      newArr[i] = newValue;
      i++;
    } else {
      i++;
    }
  }

  return newArr;
};

console.log([1, 2, , 4].myMap((element, index) => element * index));
