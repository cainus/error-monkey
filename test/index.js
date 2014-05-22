var errorMonkey = require('../index');
var domain = require('domain');
var should = require('should');



describe("ErrorMonkey", function(){
  it("can emit an error after 3 seconds", function(done){
    var thisDomain = domain.create();
    thisDomain.run(function(){
      errorMonkey(3, 1);
    });
    thisDomain.on('error', function(evt){
      evt.message.should.equal('ErrorMonkeyError');
      done();
    });
  });
});
