require('./prototype-extenders/String');

String.addExtendedPrototypes({
    include: [ 'reverse', 'capitalizeFirstLetter' ]
});

console.log("abcdefghijklmnop".reverse());
console.log("abcdefghijklmnop".capitalizeFirstLetter());