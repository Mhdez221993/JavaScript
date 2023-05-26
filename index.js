var findMedianSortedArrays = function (nums1, nums2) {
  if (nums1.length > nums2.length) {
    [nums1, nums2] = [nums2, nums1];
  }

  let len1 = nums1.length;
  let len2 = nums2.length;
  let start = 0;
  let end = len1;

  while (start <= end) {
    let mid1 = (start + end) >> 1;
    let mid2 = ((len1 + len2 + 1) >> 1) - mid1;

    let max1 = mid1 === 0 ? -Infinity : nums1[mid1 - 1];
    let min1 = mid1 === len1 ? Infinity : nums1[mid1];

    let max2 = mid2 === 0 ? -Infinity : nums2[mid2 - 1];
    let min2 = mid2 === len2 ? Infinity : nums2[mid2];

    if (max1 <= min2 && max2 <= min1) {
      if ((len1 + len2) % 2 === 0) {
        return (Math.max(max1, max2) + Math.min(min1, min2)) / 2.0;
      } else {
        return Math.max(max1, max2);
      }
    } else if (max1 > min2) {
      end = mid1 - 1;
    } else {
      start = mid1 + 1;
    }
  }
};
