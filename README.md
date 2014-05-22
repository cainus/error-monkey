error-monkey
============
[![Build
Status](https://secure.travis-ci.org/cainus/error-monkey.png?branch=master)](http://travis-ci.org/cainus/error-monkey)
[![Coverage Status](https://coveralls.io/repos/cainus/error-monkey/badge.png?branch=master)](https://coveralls.io/r/cainus/error-monkey)

An event emitter that emits error events for use in testing your server for resilience.

## Basic usage:

```javascript
var errorMonkey = require('error-monkey');
errorMonkey(30, 0.5);  
  // ^^^ every 30 seconds, there's a 50% chance of error

```

You can drop error-monkey at different places in your code to make sure
that your server can gracefully restart in the case of uncaught error events.

You want a graceful restart so that outstanding connections are not
unceremoniously dropped.

 
