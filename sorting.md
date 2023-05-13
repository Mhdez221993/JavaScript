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

#### Merge Sort
The idea of a merge sort is divide and conquer: We divide the array into two almost equally, sort them (usually another merge sort), and merge the two sorted lists into one.
```js
function mergeSort(unsortedList) {
    const n = unsortedList.length;
    if (n <= 1) return unsortedList;
    const midpoint = Math.floor(n / 2);
    const leftList = sortList(unsortedList.slice(0, midpoint));
    const rightList = sortList(unsortedList.slice(midpoint));
    const res = [];
    let leftPtr = rightPtr = 0;
    while (leftPtr < midpoint || rightPtr < n - midpoint) {
        if (leftPtr === midpoint) {
            res.push(rightList[rightPtr]);
            rightPtr++;
        } else if (rightPtr === n - midpoint) {
            res.push(leftList[leftPtr]);
            leftPtr++;
        } else if (leftList[leftPtr] <= rightList[rightPtr]) {
            res.push(leftList[leftPtr]);
            leftPtr++;
        } else {
            res.push(rightList[rightPtr]);
            rightPtr++;
        }
    }
    return res;
}
```

#### Quick Sort
Quick sort is a divide-and-conquer sorting algorithm that selects a pivot, partitions the array around the pivot, and recursively sorts the sub-arrays.
```js
function quickSort(unsortedList, start, end) {
    if (end - start <= 1) return;
    const pivot = unsortedList[end - 1];
    let startPtr = start, endPtr = end - 1;

    while (startPtr < endPtr) {
        while (unsortedList[startPtr] < pivot && startPtr < endPtr) {
            startPtr++;
        }
        while (unsortedList[endPtr] >= pivot && startPtr < endPtr) {
            endPtr--;
        }
        if (startPtr == endPtr) break;
        const temp = unsortedList[startPtr];
        unsortedList[startPtr] = unsortedList[endPtr];
        unsortedList[endPtr] = temp;
    }
    const temp = unsortedList[startPtr];
    unsortedList[startPtr] = unsortedList[end - 1];
    unsortedList[end - 1] = temp;

    quickSort(unsortedList, start, startPtr);
    quickSort(unsortedList, startPtr + 1, end);
}
```