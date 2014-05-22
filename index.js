var EventEmitter = require('events').EventEmitter;

var ErrorMonkey = function(strategy){
  if (!strategy){
    strategy = everyXMilliseconds(30000);
  }

  if (!(this instanceof ErrorMonkey)) {
    return new ErrorMonkey(strategy);
  }

  var emitter = new EventEmitter();

  strategy(function(){
    emitter.emit('error', new Error("ErrorMonkeyError"));
  });
};

var everyXMilliseconds = function(x){
  return function(cb){
    setInterval(function(){cb();}, x);
  };
};

ErrorMonkey.everyXMilliseconds = everyXMilliseconds;

module.exports = ErrorMonkey;

