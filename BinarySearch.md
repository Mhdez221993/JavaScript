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

###### First Element Not Smaller Than Target.
Input: `arr = [1, 3, 3, 5, 8, 8, 10]` <br />
Output: `2` <br />
Explanation: the first element larger than 2 is `3` which has index 1.
```js
function firstNotSmaller(arr, target) {
    let left = 0;
    let right = arr.length -1;
    let index = right;

    while(left <= right) {
        let mid = Math.floor((left+right)/ 2);

        if(arr[mid] >= target) {
            index = mid;
            right = mid -1;
        } else {
            left = mid+1;
        }
    }

    return index;
}
```

###### Find Element in Sorted Array with Duplicates, return first occurences's index.
Input: <br />
    * `arr = [1, 3, 3, 3, 3, 6, 10, 10, 10, 100]` <br />
    * `target = 3` <br />
Output: `1` <br />
Explanation: The first occurrence of 3 is at index 1.
```js
function findFirstOccurrence(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    let targetIndex = -1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] == target) {
            targetIndex = mid;
            right = mid - 1;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return targetIndex;
}
```