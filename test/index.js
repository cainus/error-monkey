var errorMonkey = require('../index');

describe("ErrorMonkey", function(){
  it("can emit an error every 3 seconds", function(done){
    errorMonkey(errorMonkey.everyXMilliseconds(3000));
  });
});
