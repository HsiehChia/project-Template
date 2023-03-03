/**
 * DSP/BSP二叉树
 * https://leetcode.cn/problems/binary-tree-maximum-path-sum/
 * 1. 寻找二叉树中的最大路径和
 * 路径 被定义为一条从树中任意节点出发，沿父节点-子节点连接，达到任意节点的序列
 * 同一个节点在一条路径序列中 至多出现一次 。该路径至少包含一个 节点，且不一定经过根节点。
 * 路径和 是路径中各节点值的总和。
 * 给你一个二叉树的根节点 root ，返回其 最大路径和 。
 * 示例1：
 * 输入：root = [1,2,3]
 * 输出：6
 * 解释：最优路径是 2 -> 1 -> 3 ，路径和为 2 + 1 + 3 = 6
 * 示例2：
 * 输入：root = [-10,9,20,null,null,15,7]
 * 输出：42
 * 解释：最优路径是 15 -> 20 -> 7 ，路径和为 15 + 20 + 7 = 42
 */
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    function dfs(root) {
      if(root == null) {
        return 0
      }
      const left = dfs(root.left)
      const right = dfs(root.right)
      const maxSum = left + root.value + right;
      max = Math.max(max, maxSum);
      return root.value + Math.max(left, right)
    }

    // TODO:树结构
    // let root = [1,2,3]
    // let root = [-10,9,20,null,null,15,7]
    let root = {
      value: 1,
      left: {
        value: 2,
        left: null,
        right: null
      },
      right: {
        value: 3,
        left: null,
        right: null
      }
    }
    let max = Number.MIN_SAFE_INTEGER;

    while(line = await readline()){
      // 层序遍历储存二叉树（略）
      dfs(root);
      console.log(max);
    }

    // while(line = await readline()){
    //   const nums = line.split(' ').map(Number);
    //   const res = findSubArr(nums);
    //   console.log(res);
    // }
}()

