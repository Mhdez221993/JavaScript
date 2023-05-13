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

#### Selection Sort
The idea for this sorting algorithm is that during each cycle, we find the smallest item from the unsorted pile and add it to the sorted pile.
```js
function selectionSort(unsortedList) {
    const n = unsortedList.length;
    for (var i = 0; i < n; i++) {
        let minIndex = i;
        for (var j = i; j < n; j++) {
            if (unsortedList[j] < unsortedList[minIndex]) {
                minIndex = j;
            }
        }
        [unsortedList[i], unsortedList[minIndex]] = [unsortedList[minIndex], unsortedList[i]];
    }
    return unsortedList;
}
```