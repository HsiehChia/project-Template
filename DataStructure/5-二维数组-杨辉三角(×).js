/**
 * 二位数组
 * https://blog.csdn.net/yfy1127yfy/article/details/103387049
 * 3. 杨辉三角
 * 给定一个非负整数 numRows，生成杨辉三角的前 numRows 行。
 * 示例:
 * 输入:
 * 5
 * 输出:
 * [
 *  [1],
 *  [1, 1],
 *  [1, 2, 1],
 *  [1, 3, 3, 1],
 *  [1, 4, 6, 4, 1],
 * ]
 *
 */
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here

    // numRows行
    let numRows = 5
    // let numRows = 0
    // let numRows = 1

    while(line = await readline()){
      const res = findLine(nums);
      console.log(res);
    }

    // while(line = await readline()){
    //   const nums = line.split(' ').map(Number);
    //   const res = findSubArr(nums);
    //   console.log(res);
    // }
}()

