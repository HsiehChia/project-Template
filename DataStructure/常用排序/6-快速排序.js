void function () {
  const arr = [3, 2, 1, 5, 6, 4];
  function quickSort(arr) {
    // 1.判断长度
    if(arr.length <= 1) {
      return arr;
    }
    // 2.取出中间值
    const index = Math.floor(arr.length / 2);
    const middleValue = arr.splice(index, 1)[0];

    // 3.分为两个数组
    const leftArr = [];
    const rightArr = [];
    for(let i = 0; i < arr.length; i++) {
      arr[i] < middleValue ? leftArr.push(arr[i]) : rightArr.push(arr[i]);
    }
    return quickSort(leftArr).concat(middleValue, quickSort(rightArr));
  }

  const res =  quickSort(arr);
  console.log(res)
}()