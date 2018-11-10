const extentions = {
    reverse: function() {
        return this.split('').reverse().join('')
    },
    capitalizeFirstLetter: function() {
        return this.charAt(0).toUpperCase() + this.slice(1);
    }
};

String.addExtendedPrototypes = (config) => require('../utils/addExtendedPrototypes')(String, config, extentions);
