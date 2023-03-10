/**
 * 二位数组
 * https://blog.csdn.net/yfy1127yfy/article/details/103387049
 * 2. 螺旋矩阵
 * 给定一个包含 m x n 个元素的矩阵（m 行, n 列），请按照顺时针螺旋顺序，返回矩阵中的所有元素，对角线遍历如下图所示。
 * 示例:
 * 输入:
 * [
 *  [ 1, 2, 3 ],
 *  [ 4, 5, 6 ],
 *  [ 7, 8, 9 ]
 * ]
 * 输出:  [1,2,3,6,9,8,7,4,5]
 */
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here

    // M行N列
    // let nums = []
    // let nums = [
    //   [ 1 ],
    // ]
    let nums = [
      [ 1, 2, 3 ],
    ]
    // let nums = [
    //   [ 2 ],
    //   [ 3 ],
    //   [ 4 ],
    // ]
    // let nums = [
    //   [ 1, 2, 3 ],
    //   [ 4, 5, 6 ],
    //   [ 7, 8, 9 ]
    // ]
    // let nums = [
    //   [ 1, 2, 3, 4, 5, 6 ],      // [(0, 0),......,(i, 0),......(m-1, 0)]
    //   [ 7, 8, 9, 10, 11, 12 ],   // [...................................]
    //   [ 13, 14, 15, 16, 17, 18 ] // [(0, j),.......(i, j),......(m-1, j)]
    //   [ 19, 20, 21, 22, 23, 24 ] // [...................................]
    //   [ 25, 26, 27, 28, 29, 30 ] // [(0, n-1),...,(i, n-1),...(m-1, n-1)]
    // ]

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

