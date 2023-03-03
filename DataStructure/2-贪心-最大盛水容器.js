/**
 * 贪心算法
 * 2. 盛最多水的容器
 * 给定一个长度为 n 的整数数组 height 。有 n 条垂线，第 i 条线的两个端点是 (i, 0) 和 (i, height[i]) 。
 * 找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。
 * 返回容器可以储存的最大水量。
 * 说明：你不能倾斜容器。
 *
 * 示例1：
 * 输入：[1,8,6,2,5,4,8,3,7]
 * 输出：49
 * 解释：图中垂直线代表输入数组 [1,8,6,2,5,4,8,3,7]。在此情况下，容器能够容纳水（表示为蓝色部分）的最大值为 49。
 *
 * 示例2：
 * 输入：height = [1,1]
 * 输出：1
 */
const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});

// 容器容纳最大水
let area = 0;

function maxArea(height) {
  const n = height.length;
  if( n <= 1 ) {
    // 没有容器
    return area;
  }

  for(let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      area = Math.max(area, ((j - i) * Math.min(height[i], height[j])))
    }
  }
  return area;

}

rl.on('line' , function(line){
    // 数组
    const height =  line.split(' ').map(Number);
    // 点：(i, height[i])
    // maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]);
    console.log(maxArea(height))
});