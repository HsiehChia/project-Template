/**
 * 二分查找
 * 1. 寻找两个正序数组的中位数
 * 给定两个大小分别为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。请你找出并返回这两个正序数组的 中位数 。
 * 算法的时间复杂度应该为 O(log (m+n)) 。
 * 示例 1：
 * 输入：nums1 = [1,3], nums2 = [2]
 * 输出：2.00000
 * 解释：合并数组 = [1,2,3] ，中位数 2
 * 示例 2：
 * 输入：nums1 = [1,2], nums2 = [3,4]
 * 输出：2.50000
 * 解释：合并数组 = [1,2,3,4] ，中位数 (2 + 3) / 2 = 2.5
 */
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    function findMiddle(nums) {
      if(nums.length <= 1) {
        return nums;
      }

      const index = Math.floor(nums.length / 2);
      const middleVal = nums.splice(index, 1)[0];

      const leftArr=[];
      const rightArr=[];
      for(let i = 0; i < nums.length; i++) {
        if(nums[i] > middleVal) {
          rightArr.push(nums[i])
        } else {
          leftArr.push(nums[i])
        }
      }
      return findMiddle(leftArr).concat(middleVal, findMiddle(rightArr))
    }


    // let nums1 = [1,3], nums2 = [2]
    let nums1 = [1,2], nums2 = [3,4]

    while(line = await readline()){
      const nums = Array.from(new Set([...nums1, ...nums2]))
      const newNums = findMiddle(nums);
      let middleNum = newNums[0];
      if(newNums.length % 2 == 0) {
        middleNum=(newNums[newNums.length/2] + newNums[newNums.length/2 - 1]) / 2.0
      } else {
        middleNum=newNums[(newNums.length - 1)/2]
      }
      console.log(middleNum);
    }

    // while(line = await readline()){
    //   const nums = line.split(' ').map(Number);
    //   const res = findSubArr(nums);
    //   console.log(res);
    // }
}()

