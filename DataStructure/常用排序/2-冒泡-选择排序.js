void function() {
  const arr = [3, 2, 1, 5, 6, 4];
  function popSort(arr) {
    if(arr.length <= 1) {
      return arr;
    }
    for(let i = 0; i < arr.length; i++) {
      // j = 0 时就是冒泡排序，现在是选择排序
      for(let j = i; j < arr.length; j++) {
        if(arr[j] < arr[i]) {
          let temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
        }
      }
    }
    return arr;
  }
  const res = popSort(arr);
  console.log(res);
}()