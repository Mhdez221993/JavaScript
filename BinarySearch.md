# Binary Search

# Given a sorted array of integers and an integer called target, find the element that equals the target and return its index. If the element is not found, return -1.
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
