let mergeSort = function(aArray, bArray){
    let returnArray=[];
    let i = 0;
    let j = 0;
    let k = 0;

    while(i < aArray.length && j < bArray.length)
    {
        if(aArray[i] <= bArray[j]){
            returnArray[k++] = aArray[i++];
        }
        else
        {
            returnArray[k++] = bArray[j++];
        }
    }

    while(i< aArray.length)
    {
        returnArray[k++] = aArray[i++];
    }

    while(j < bArray.length)
    {
        returnArray[k++] = bArray[j++];
    }

    return returnArray;    
}

let firstArray = [5, 17, 23, 34, 67, 78, 89, 111, 235, 236];
let secondArray = [3, 45, 56, 67 ,99, 106, 115, 237, 567];

console.log(mergeSort(firstArray,secondArray));