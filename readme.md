#Prototype-extender

Some handy prototype-extenders for javascript.

##### How to use it
```javascript
require('./prototype-extenders/String');

String.addExtendedPrototypes();

console.log("abcdefghijklmnop".reverse()); // ponmlkjihgfedcba
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

