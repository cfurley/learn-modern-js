/**
 * The goal of this challenge is the capitalize the first letter * of a given string.
 */

let str = "string";

str = str.charAt(0).toLocaleUpperCase() + str.substring(1,str.length);

console.log(str);