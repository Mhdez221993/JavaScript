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

#### Bubble Sort
Bubble sort is a simple sorting algorithm that repeatedly compares adjacent elements in an array and swaps them if they are in the wrong order.
```js
function bubbleSort(unsortedList) {
    const n = unsortedList.length;
    for (var i = n - 1; i >= 0; i--) {
        let swapped = false;
        for (var j = 0; j < i; j++) {
            if (unsortedList[j] > unsortedList[j + 1]) {
                const temp = unsortedList[j];
                unsortedList[j] = unsortedList[j + 1];
                unsortedList[j + 1] = temp;
                swapped = true;
            }
        }
        if (!swapped) return unsortedList;
    }
    return unsortedList;
}
```