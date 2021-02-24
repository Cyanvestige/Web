let PI = 3.14;
function sum(array){
    let sum = 0;
    for(let i = 0;i < array.length;i++){
        sum += array[i]; 
    }
    return sum;
}

function findMax(array){
    let max = array[0];
    for(let i = 0;i < array.length;i++){
        if(array[i] > max)
            max = array[i];
    }
    return max; 
}

function findMin(array){
    let min = array[0];
    for(let i = 0;i < array.length;i++){
        if(array[i] < min)
            min = array[i];
    } 
    return min;
}
module.exports.sum = sum;
module.exports.findMax = findMax;
module.exports.findMin = findMin;

console.log(module);