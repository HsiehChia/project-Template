/**
 * 优先队列
 * 1. 数组中的第K个最大元素
 * 给定整数数组 nums 和整数 k，请返回数组中第 k 个最大的元素。
 * 请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。
 * 你必须设计并实现时间复杂度为 O(n) 的算法解决此问题。
 * 示例 1:
 * 输入: [3,2,1,5,6,4], k = 2
 * 输出: 5
 * 示例 2:
 * 输入: [3,2,3,1,2,4,5,5,6], k = 4
 * 输出: 4
 */
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    function quickSort(nums) {
      if(nums.length <= 1) {
        return nums;
      }
      const index = Math.floor(nums.length / 2);
      const middleVal = nums.splice(index, 1)[0];
      const leftArr = [];
      const rightArr = [];
      for(let i = 0; i < nums.length; i++) {
        if(nums[i] < middleVal) {
          leftArr.push(nums[i])
        } else {
          rightArr.push(nums[i])
        }
      }
      // console.log(leftArr, middleVal, rightArr)
      return quickSort(leftArr).concat(middleVal, quickSort(rightArr));
    }

    function findMax(nums, k) {
      if(nums.length < k) {
        return null;
      }
      const res = quickSort(nums);
      // console.log(res, res[res.length - k])

      return res[res.length - k]
    }

    // let nums = [3, 2, 1, 5, 6, 4]
    // let nums = [3,2,3,1,2,4,5,5,6]

    while(line = await readline()){
      let nums = line.split(' ').map(Number);
      let k = await readline();
      // console.log(nums, parseInt(k))
      const res = findMax(nums, parseInt(k))
      console.log(res)
    }
}()

