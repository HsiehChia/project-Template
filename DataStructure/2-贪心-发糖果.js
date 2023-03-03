/**
 * 贪心算法
 * 1. 分发糖果
 * n 个孩子站成一排。给你一个整数数组 ratings 表示每个孩子的评分。
 * 你需要按照以下要求，给这些孩子分发糖果：
 * 每个孩子至少分配到 1 个糖果。
 * 相邻两个孩子评分更高的孩子会获得更多的糖果。
 * 请你给每个孩子分发糖果，计算并返回需要准备的 最少糖果数目 。
 *
 * 示例 1：
 * 输入：ratings = [1,0,2]
 * 输出：5
 * 解释：你可以分别给第一个、第二个、第三个孩子分发 2、1、2 颗糖果。
 *
 * 示例 2：
 * 输入：ratings = [1,2,2]
 * 输出：4
 * 解释：你可以分别给第一个、第二个、第三个孩子分发 1、2、1 颗糖果。
 * 第三个孩子只得到 1 颗糖果，这满足题面中的两个条件。
 *
 * 提示：
 * n == ratings.length
 * 1 <= n <= 2 * 104
 * 0 <= ratings[i] <= 2 * 104
 */
const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});

// 总糖果数
let candy = 0;

function check(rating) {
  const length = rating.length;
  if(length == 0) {
    return candy
  }
  let leftArr = new Array(length).fill(0);
  let rightArr = new Array(length).fill(0);

  for(let i = 0; i < length; i++) {
    if(i > 0 && rating[i] > rating[i - 1]) {
      leftArr[i] = leftArr[i - 1] + 1;
    } else {
      leftArr[i] = 1;
    }
  }

  for(let i = length - 1; i > -1 ; i--) {
    if(i < length - 1 && rating[i] > rating[i+1]) {
      rightArr[i] = rightArr[i+1] + 1;
    } else {
      rightArr[i] = 1;
    }
    candy += Math.max(leftArr[i], rightArr[i]);
  }

  return candy;
}


rl.on('line' , function(line){
    // 积分
    const ratings =  line.split(' ').map(Number);
    console.log(check(ratings));
});