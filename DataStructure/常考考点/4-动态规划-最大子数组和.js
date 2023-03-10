/**
 * 字符串/动态规划
 * 1. 最大子数组和
 * 给你一个整数数组 nums ，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
 * 子数组 是数组中的一个连续部分。
 * 示例 1：
 * 输入：nums = [-2,1,-3,4,-1,2,1,-5,4]
 * 输出：6
 * 解释：连续子数组 [4,-1,2,1] 的和最大，为 6 。
 * 示例 2：
 * 输入：nums = [1]
 * 输出：1
 * 示例 3：
 * 输入：nums = [5,4,-1,7,8]
 * 输出：23
 * 提示：
 * 1 <= nums.length <= 105
 * -104 <= nums[i] <= 104
 */
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    function findSubArr(nums) {
      if(nums.length <= 1) {
        return nums[0];
      }
      let max = 0;
      // let x = ''
      for(let i = 1; i <= nums.length; i++){
        let sum = nums[i - 1];
        for(let j = i + 1; j <= nums.length; j++) {
          sum += nums[j - 1]
          max = Math.max(max, sum);
          // x += nums[j - 1] + ' ';
        }
        // x += '======' + nums[i-1] + sum + '\n';
      }
      // console.log(x)

      return max;
    }

    // let nums = [1, -2, 3]
    // let nums = [-2,1,-3,4,-1,2,1,-5,4]
    // let nums = [1]
    // let nums = [5,4,-1,7,8]

    // while(line = await readline()){
    //   const res = findSubArr(nums);
    //   console.log(res);
    // }

    while(line = await readline()){
      const nums = line.split(' ').map(Number);
      const res = findSubArr(nums);
      console.log(res);
    }
}()

