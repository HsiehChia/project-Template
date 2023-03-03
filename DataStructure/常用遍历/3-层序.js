void function() {
  const arr = [-10,9,20,null,null,15,7]
  // 构造二叉树
  function binaryTree(arr) {
    const root = {}
    if(arr.length <= 1) {
      root.value = arr[0]
      root.left = null;
      root.right = null;
      return root
    }
    // 利用队列
    root.value = arr.shift();

    console.log(root, arr)



    return arr
  }

  binaryTree(arr);
}()