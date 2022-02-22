// const areaOrPerimeter = function (l, w){
//     if (isNaN(parseFloat(l)) || isNaN(parseFloat(w))) {
//         return false;
//     }
//     if (l === w) {
//         return parseFloat(l) * parseFloat(w);
//     } else if (l !== w) {
//         return (parseFloat(l) * 2) + (parseFloat(w) * 2);
//     }
// }

// Create a function, analyzeArray, that takes in a an array and returns an object with information about the passed array. The function should return an object with properties containing information about the array, including the lengthOfArray, containsAllStrings, and the combineResult of adding all elements together.
// analyzeArray([1, 2, 3]) returns...
// {
//     lengthOfArray: 3,
//         containsAllStrings: false,
//     combineResult: 6
// }
// analyzeArray([‘a’, ‘b’, ‘c’]) returns...
// {
//     lengthOfArray: 3,
//         containsAllStrings: true,
//     combineResult: ‘abc’
// }
// analyzeArray([‘bob’, 100, null]) returns...
// {
//     lengthOfArray: 3,
//         containsAllStrings: true,
//     combineResult: ‘bob123null’
// }

// function analyzeArray(arr){

    // let combine;
    // arr.forEach(function(element, index){
    //     if(index === 0){
    //         combine = element;
    //     }
    //     combine += element;
    // });
//     let combine;
//     for(let arr1 of arr){
//         if(arr1 === 0){
//         combine = arr1;
//         }
//         combine += arr
//     }
//
//
//     return{
//         lengthOfArray: arr.length,
//         containsAllStrings: arr.every(function(element){
//             return typeof element === 'string'
//         }),
//         combineResult: combine
//     };
// }
// console.log(analyzeArray([1,2,3]))
// console.log(analyzeArray(['a','b','c']))


// ================================= WARM UP
//
// Create a function, createNames, that takes in an array of first names and an array of last names. The function should return an array of name objects with firstName and lastName properties with the input array values. Assume both input arrays are not empty, the same length and only contain string elements.
//
    var firstNames = ['CJ', 'Max', 'Claude', 'Meowmeow'];
    var lastNames = ['Cat', 'Feline', 'Kitten', 'Calico'];
//
// createNames(firstNames, lastNames) // returns...
//
//     [
//     {
//         firstName: 'CJ',
//         lastName: 'Cat'
//     },
//         {
//             firstName: 'Max',
//             lastName: 'Feline'
//         },
//         {
//             firstName: 'Claude',
//             lastName: 'Kitten'
//         },
//         {
//             firstName: 'Meowmeow',
//             lastName: 'Calico'
//         }
//     ]
//
// HINT: a solution may involve using a for loop to iterate over the length of one array to push each name object onto an array of name objects that will be returned from the function.


function createNames(firstNames1, lastNames1){
    let arrName = [];

    for(let i = 0; i < firstNames1.length; i++){
        arrName.push({firstName: firstNames1[i], lastName:lastNames1[i]})
    }
    return arrName
}

console.log(createNames(firstNames,lastNames));