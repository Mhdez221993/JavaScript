# Binary Search

#### Binary Search Template
```js
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    let first_true_index = -1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (feasible(mid)) {
            first_true_index = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return first_true_index;
}
```

###### Given a sorted array of integers and an integer called target, find the element that equals the target and return its index. If the element is not found, return -1.
```js
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length -1;

    while(left <= right){
        let mid = Math.floor( (right + left) / 2);

        if(arr[mid] === target) {
            return mid
        } else if(arr[mid] < target) {
            left = mid + 1;
        } else if(arr[mid] > target) {
            right = mid -1;
        }

    }

    return -1;
}
```

###### Find the First True in a Sorted Boolean Array.
Input: `arr = [false, false, true, true, true]` <br />
Output: `2` <br />
Explanation: first `true`'s index is 2.
```js
function findBoundary(arr) {
  let left = 0;
  let right = arr.length - 1;
  let first_true = -1;

  while (left <= right) {
    let mid = Math.floor((right + left) / 2);

    if (arr[mid]) {
      right = mid - 1;
      first_true = mid;
    } else {
      left = mid + 1;
    }
  }

  return first_true;
}
```