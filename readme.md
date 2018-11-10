# Prototype-extender

Some handy prototype-extenders for javascript.

##### How to use it
```javascript
require('./prototype-extenders/String');

String.addExtendedPrototypes();

console.log("abcdefghijklmnop".reverse()); // ponmlkjihgfedcba
console.log("abcdefghijklmnop".capitalizeFirstLetter()); // Abcdefghijklmnop


Array.addExtendedPrototypes();

const array = [1,1,1,2,3,4,5,5,6,7,8,9,9,9,9,10,10,11,11,12,12,13,14];
array.log() // [ 1, 1, 1, 2, 3, 4, 5, 5, 6, 7, 8, 9, 9, 9, 9, 10, 10, 11, 11, 12, 12, 13, 14 ]
    .unique()
    .log(); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14 ]
```


##### How to use some of it
```javascript
require('./prototype-extenders/String');

String.addExtendedPrototypes({
    include: [ 'reverse' ]
});

console.log("abcdefghijklmnop".reverse()); // ponmlkjihgfedcba
```

##### How to all of it except for some
```javascript
require('./prototype-extenders/String');

String.addExtendedPrototypes({
    exclude: [ 'reverse' ]
});

console.log("abcdefghijklmnop".capitalizeFirstLetter()); // Abcdefghijklmnop
```

