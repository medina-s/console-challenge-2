
// BRONZE : Create a function that takes in an array and returns the sum of all the element of an array.
 
// SILVER : If the array does not have any elements in it, return a string message for invalid arguments.
 
// GOLD : Return the sums of the elements that are multiples of three ONLY. If there are no multiples of three, 
// return a string message for invalid arguments

add = function (arr){
    return arr.reduce((a, b) => a + b, 0);
}
console.log(add([1,2,3,4,]));