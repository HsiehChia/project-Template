void function() {
  const arr = [3, 2, 1, 5, 6, 4];
  function insertSort(arr) {
    if(arr.length <= 1) {
      return arr;
    }
    for(let i = 1; i < arr.length; i++) {
      let currentVal = arr[i];

      let j = i - 1
      while(arr[j] > currentVal) {
        arr[j + 1] = arr[j];
        j--;
      }
      arr[j + 1] = currentVal;
    }
    return arr;
  }

  const res = insertSort(arr);
  console.log(res);
}()