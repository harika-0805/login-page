function* generatorFunction() {
    console.log('Generator started');
    yield null
    console.log('this is second')
}
var generator=generatorFunction();
console.log('activating once')
generator.next();
console.log('activating twice')
generator.next();
  //
  function* generatorFunction() {
    console.log("i've not generated yet");
    parameterPassedToNext = yield console.log("i will print this, then yeild");
    console.log(parameterPassedToNext);
  }
  var generator=generatorFunction();
  generator.next();
  generator.next('this is the parameter passed to next');