require('./prototype-extenders');

String.addExtendedPrototypes();

console.log("abcdefghijklmnop".reverse());
console.log("abcdefghijklmnop".capitalizeFirstLetter());

Array.addExtendedPrototypes();
const array = [1,1,1,2,3,4,5,5,6,7,8,9,9,9,9,10,10,11,11,12,12,13,14];
array.log() // [ 1, 1, 1, 2, 3, 4, 5, 5, 6, 7, 8, 9, 9, 9, 9, 10, 10, 11, 11, 12, 12, 13, 14 ]
    .unique()
    .log(); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14 ]