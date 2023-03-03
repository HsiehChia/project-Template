/**
 * 二位数组
 * https://blog.csdn.net/yfy1127yfy/article/details/103387049
 * 1. 遍历对角线
 * 给定一个含有 M x N 个元素的矩阵（M 行，N 列），请以对角线遍历的顺序返回这个矩阵中的所有元素，对角线遍历如下图所示。
 * 示例:
 * 输入:
 * [
 *  [ 1, 2, 3 ],
 *  [ 4, 5, 6 ],
 *  [ 7, 8, 9 ]
 * ]
 * 输出:  [1,2,4,7,5,3,6,8,9]
 */
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    function findLine (arr) {
      const outArr = []
      if(arr.length == 0) {
        return outArr
      }
      // m行
      const m = arr.length;
      // n列
      const n = arr[0].length;
      if(n == 0) {
        return outArr
      }

      for(let i = 0; i < Math.max(m, n); i++) {
        if(i + 1 % 2 == 0) {
          // 偶数
          for(let j = 0; j < i; j++) {
            if(i + 1 % 2 == 0) {
              // 偶数
            } else {
              // 奇数
              outArr.push(arr[j][i])
            }
          }
        } else {
          // 奇数
          let row = 0
          for(let j = i; j > 0; j--) {
            outArr.push(arr[j][row])
          }
        }
      }
      return arr;
    }

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

