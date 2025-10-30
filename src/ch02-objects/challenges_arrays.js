/**
 * Challenge 1:
 *   Input: [1,2,3,4,5]
 *   Ex. Output: [6,5,4,3,2,1,0]
 */

let arr1 = [1,2,3,4,5];
arr1.push(6);
arr1.reverse();
arr1.push(0);
console.log('Challenge-1:', arr1);

/**
 * Challenge 2:
 *   Input [1,2,3,4,5] , [5,6,7,8,9,10]
 *   Ex. Output [1,2,3,4,5,6,7,8,9,10]
 */

let arr2 = [1,2,3,4,5];
let arr3 = [5,6,7,8,9,10];
arr4 = arr2.concat(arr3.splice(1));
console.log('Challenge-2:', arr4);