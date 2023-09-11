const path = require('path');

module.exports = {
    
    resolve: {
        alias: {
            'browser': path.resolve(__dirname, './.storybook/preview.js'),
        },
        fallback: {
            timers: false
        },

    },
    
};