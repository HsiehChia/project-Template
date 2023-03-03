void function() {
  const arr = [3, 2, 1, 5, 6, 4];

  function merge(leftArr, rightArr) {
    let tmp = new Array()
    while(leftArr.length > 0 && rightArr.length > 0) {
      if(leftArr[0] < rightArr[0]){
        tmp.push(leftArr.shift());
      } else {
        tmp.push(rightArr.shift());
      }
    }
    return tmp.concat(leftArr, rightArr);
  }

  function mergeSort(arr) {
    if(arr.length <= 1) {
      return arr;
    }
    const middleVal = Math.floor(arr.length / 2);
    const leftArr = arr.splice(0, middleVal);
    const rightArr = arr.splice(0);

    return merge(mergeSort(leftArr), mergeSort(rightArr));
  }

  const res = mergeSort(arr);
  console.log(res)
}()