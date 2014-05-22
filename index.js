var EventEmitter = require('events').EventEmitter;

var ErrorMonkey = function(strategy, p){
  if (!p && p !== 0){
    p = 1;  // default to p = 1
  }

  var defaultInterval = 3;
  if (!isFunction(strategy)){
    defaultInterval = strategy;
    strategy = null;
  }

  if (!strategy){
    strategy = everyXSeconds(defaultInterval, p);
  }


  if (!(this instanceof ErrorMonkey)) {
    return new ErrorMonkey(strategy);
  }

  var emitter = new EventEmitter();

  strategy(function(){
    emitter.emit('error', new Error("ErrorMonkeyError"));
  });
};

var everyXSeconds = function(x, p){
  // x is the interval in seconds
  // p is the probability as a value between 0 and 1
  if (!p && p !== 0){
    p = 1;  // default to p = 1
  }
  return function(cb){
    setInterval(function(){
      if (Math.random() < p){
        cb();
      }
    }, x * 1000);
  };
};

function isFunction(functionToCheck) {
  var getType = {};
  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
}


module.exports = ErrorMonkey;

