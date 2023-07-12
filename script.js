let a1 = [100,112,256,349,770];
let a2 = [72,86,113,119,265,445,892];


function searchElemArr (arr1,arr2) {
  console.log("arr1 => ", arr1);
  console.log("arr2 => ", arr2);

  let concatArr = [...arr1, ...arr2];
  let k = +prompt("enter number elem of array:");

  if (k > 0 && k < concatArr.length) {
    console.log("k => ", k);
  } else {
    console.log("number array's elem is not exist");
    return;
  }
  
  console.log(concatArr.sort((a, b) => a - b));
  console.log(`${k} elem of array is => ${concatArr[k - 1]}`);
}

searchElemArr(a1,a2);
