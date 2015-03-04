#express-detect-burst [![npm version](https://badge.fury.io/js/express-detect-burst.svg)](http://badge.fury.io/js/express-detect-burst)

abnormal access detection middleware of express.



# Install

[![NPM](https://nodei.co/npm/express-detect-burst.png)](https://npmjs.org/package/express-detect-burst)



# Usage

```javascript
var burst = require( 'express-detect-burst' );

// if over 100 request arrived in 60000 milisecond (1 min)
// callback called
app.use( burst( {
    threshold: 100,
    interval:  60000,
    callback:  function () {
        console.log( 'burst' );
    }
} ) );
```
