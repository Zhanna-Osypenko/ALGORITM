// ============ quickSort ============

function quickSort2(arr) {
    console.log('base arr => ', arr);
    if (arr.length <= 1) return arr;
    let k = arr[arr.length - 1];
    let index = 0;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] < k) {
        [arr[i], arr[index]] = [arr[index], arr[i]];
        index++;
      }
    }
    [arr[arr.length - 1], arr[index]] = [arr[index], arr[arr.length - 1]];
  
    return [...quickSort2(arr.slice(0, index)), k, ...quickSort2(arr.slice(index + 1))];
}
let array2 = [8, 7, 6, 5, 4, 3, 2, 1];
let array3 = [-8, 47, 61, -15, 0, 42, 3, -2, 1];
  
console.log('RESULT ARR2 => ', quickSort2(array2)); 
console.log('==================');
console.log('RESULT ARR3 => ', quickSort2(array3)); 

// ========= сортировка массива ====
   
// function sort(A) {
//     let zeros = 0;
//     for (let value of A) {
//       if (value === 0) {
//         zeros++;
//       }
//     }
//     let k = 0;
//     while (zeros-- !== 0) {
//       A[k++] = 0;
//     }
//     while (k < A.length) {
//       A[k++] = 1;
//     }
//   }
  
//   let array = [0, 0, 1, 1, 1, 0, 1, 0, 1, 1];
//   sort(array);
//   console.log(array);