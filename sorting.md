# Intro to Sorting

#### Insertion sort
Is a simple algorithm that sorts an array by iteratively placing each element in its appropriate position within the already sorted part of the array.
```js
function insertionSort(unsortedList) {
    for (var i = 0; i < unsortedList.length; i++) {
        let current = i;
        while (current > 0 && unsortedList[current] < unsortedList[current - 1]) {
            const temp = unsortedList[current];
            unsortedList[current] = unsortedList[current - 1];
            unsortedList[current - 1] = temp;
            current--;
        }
    }
    return unsortedList;
}
```