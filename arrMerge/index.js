/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
 var merge = function(nums1, m, nums2, n) {
  let i = nums1.length - 1;
  if (m === 0) {
    for (let i = 0; i < n; i ++) {
      nums1[i] = nums2[i]
    }
    return;
  }
  m--;
  n--;


  let tmp = 0;
  while (n >= 0) {
    if (nums2[n] >= nums1[m]) {
      tmp = nums1[i];
      nums1[i] = nums2[n];
      nums2[n] = tmp;
      n--;
      // console.log('---nums1', nums1)
    } else {
      // console.log('nums2[n]', nums2[n]);
      // console.log('nums1[m]', nums1[m]);

      tmp = nums1[i];
      nums1[i] = nums1[m];
      nums1[m] = tmp;
      m--;
      // console.log('=nums1', nums1)
    }
    i--;
    
  }

};

const nums1 = [1,2,3,0,0,0];
const m = 3;
const nums2 = [2,5,6];
const n = 3
const res = merge(nums1, m, nums2, n);
// console.log('nums1', nums1)