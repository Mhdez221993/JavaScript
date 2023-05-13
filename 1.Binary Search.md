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

#### Given a sorted array of integers and an integer called target, find the element that equals the target and return its index. If the element is not found, return -1.
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

#### Find the First True in a Sorted Boolean Array.
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

#### First Element Not Smaller Than Target.
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

#### Find Element in Sorted Array with Duplicates, return first occurences's index.
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

#### Square Root Estimation.
Input: `8` <br />
Output: `2` <br />
Explanation: square root of 8 is 2.83..., return the integer part, 2.
```js
function squareRoot(n) {
    if(n === 0) {
        return 0;
    }

    let left = 1;
    let right = n;
    let ans = -1;

    while(left <= right) {
        let mid = Math.floor((left+right)/2);

        if(mid*mid === n) {
            return mid;
        } else if(mid * mid > n) {
            ans = mid;
            right = mid -1;
        } else {
            left = mid + 1;
        }
    }

    return ans -1;
}
```

#### Find Minimum in Rotated Sorted Array.
Input: `[30, 40, 50, 10, 20]` <br />
Output: `3` <br />
Explanation: the smallest element is 10 and its index is 3.
```js
function findMinRotated(arr) {
    let l = 0;
    let r = arr.length -1;

    while(l <= r) {
        let mid = Math.floor((l + r) / 2);

        if(arr[mid] <= arr[r]) {
            r = mid - 1;
        } else {
            l = mid +1;
        }
    }

    return l;
}
```

#### The Peak of a Mountain Array.
Input: `0 1 2 3 2 1 0` <br />
Output: `3` <br />
Explanation: the largest element is 3 and its index is 3.
```js
function peakOfMountainArray(arr) {
    let l = 0;
    let r = arr.length -1;
    let len = arr.length -1;
    let ans = -1;

    while(l <= r) {
        let mid = Math.floor((l + r) / 2);

        if(mid === len || arr[mid] > arr[mid+1]) {
            ans = mid;
            r = mid - 1;
        } else {
            l = mid + 1;
        }
    }

    return ans;
}
```

#### Newspapers.
You've begun your new job to organize newspapers. <br />
What is the minimum amount of time it would take to have your coworkers go through all the newspapers? That is, if you optimize the distribution of newspapers, what is the longest read time among all piles? <br />
<br />

Input: `newspapers_read_times = [7,2,5,10,8], num_coworkers = 2` <br />
Output: `18` <br />
Explanation: Assign first 3 newspapers to one coworker then assign the rest to another. The time it takes for the first 3 newspapers is 7 + 2 + 5 = 14 and for the last 2 is 10 + 8 = 18.
```js
function newspapersSplit(newspapersReadTimes, numCoworkers) {
  let low = Math.max(...newspapersReadTimes);
  let high = newspapersReadTimes.reduce((a, b) => a + b, 0);
  let ans = -1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (feasible(newspapersReadTimes, numCoworkers, mid)) {
      ans = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return ans;
}

function feasible(newspapersReadTimes, numCoworkers, limit) {
  let [time, numWorkers] = [0, 0];

  for (let readTime of newspapersReadTimes) {
    if (time + readTime > limit) {
      numWorkers += 1;
      time = 0;
    }
    time += readTime;
  }

  if (time !== 0) {
    numWorkers += 1;
  }

  return numWorkers <= numCoworkers;
}
```