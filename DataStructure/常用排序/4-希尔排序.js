void function() {
  const arr = [3, 2, 1, 5, 6, 4];
  function shellSort(arr) {
    if(arr.length <= 1) {
      return arr;
    }
    for(let gap = Math.floor(arr.length / 2); gap = Math.floor(gap / 2); ){
      for(let i = gap; i< arr.length; i++) {
        let j = i - 1;
        let currentVal = arr[i];
        while(arr[j] > currentVal) {
          arr[j+1] = arr[j];
          j--;
        }
        arr[j + 1] = currentVal;
      }
    }
    console.log(arr);
    return arr;
  }
  shellSort(arr);
}()