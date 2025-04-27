function doSomething(callback) {
    setTimeout(() => {
      console.log("Doing something...");
      callback();  // 调用回调
    }, 1000);
  }
  
  function doSomethingElse(callback) {
    setTimeout(() => {
      console.log("Doing something else...");
      callback();  // 调用回调
    }, 1000);
  }
  
  function doAnotherThing(callback) {
    setTimeout(() => {
      console.log("Doing another thing...");
      callback();  // 调用回调
    }, 1000);
  }
  
  function doFinalThing(callback) {
    setTimeout(() => {
      console.log("Doing the final thing...");
      callback();  // 调用回调
    }, 1000);
  }
  
  doSomething(function() {
    doSomethingElse(function() {
      doAnotherThing(function() {
        doFinalThing(function() {
          console.log("Done!");  // 最后打印 Done!
        });
      });
    });
  });
  