function alwaysHungry(arr){
    for(i = 0; i < arr.length; i++){
        if(arr[i] == "food"){
            console.log("yummy", "yummy");
            return;
        }
    }
    console.log("I'm hungry");
    return;
}
alwaysHungry([3.14, "food", "pie", true, "food"]);
// the console should log "yummy", "yummy"
alwaysHungry([4, 1, 5, 7, 2]);
// the console should log "I'm hungry"



function highPass(arr, cutoff) {
    var filteredArr = [];
    for(i = 0; i < arr.length; i++){
        if(arr[i] > cutoff){
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result);
// we expect back [6,8,10,9]



function betterThanAverage(arr) {
    var sum = 0;
        for(i = 0; i < arr.length; i++){
            sum += arr[i];
        }
    var average = sum / arr.length;
    var count = 0;
        for(i = 0; i < arr.length; i++){
            if(arr[i] > average){
                count++;
            }
        }
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result);
// we expect back 4



function reverse(arr) {
    for(var left = 0; left < arr.length / 2; left++){
        var right = arr.length - 1 - left;
        if(arr[left] != arr[right]){
            var temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
        }
        right++;
    }
    return arr;
}
var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result);
// we expect back ["e", "d", "c", "b", "a"]



function fibonacciArray(n) {
    var fibArr = [0, 1];
    for(var i = 0; fibArr.length < n; i++){
        var x = i + 1;
        var newVal = fibArr[i] + fibArr[x];
        fibArr.push(newVal);
        }
    return fibArr;
}
var result = fibonacciArray(10);
console.log(result); 
// we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]