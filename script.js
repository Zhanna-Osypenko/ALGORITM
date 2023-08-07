function mergSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const middle =  Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right= arr.slice(middle);
    console.log('arrLEFT =>', left, 'arrRIGHT =>', right);
    return merge(mergSort(left),mergSort(right));
}

function merge(arrL, arrR) {
    let result = [];
    let i = 0;
    let j = 0;

    while (i < arrL.length && j < arrR.length) {
        if (arrL[i] < arrR[j]) {
            result.push(arrL[i]);
            i++;
        } 
        else {
            result.push(arrR[j]);
            j++;
        }
    }

    while (i < arrL.length) {
        result.push(arrL[i]);
        i++;
    }
    while (j < arrR.length) {
        result.push(arrR[j]);
        j++;
    }

    console.log('RESULT = ', result);
    return result;
}

const unsortedArr = [35, -5, 654, 0, 7, -432, 44, 197, 15, -22, -1];
const sortedArr = mergSort(unsortedArr);

console.log('unsortedArr => ', unsortedArr);
console.log('sortedArr => ', sortedArr);