const getGets = (arr) => {
    let index = 0;
  
    return () => {
      const toReturn = arr[index];
      index += 1;
      return toReturn;
    };
  };
  
  // This is the place where you must place your test data
  const test = [
    '2',
    '-20',
    '-30'// This is the first line from the test.
     // This is the second line from the test.
  ];
  
  const gets = this.gets || getGets(test);
  const print = this.print || console.log;
  
  // Solution of the problem. All the above code is for local testing. The test variable is with the first test case 2 + 2 = 4

let count = +gets();
let maxValue = null;

for (let i = 0; i < count; i++) {
    let num = +gets();
    if (maxValue === null){
        maxValue = num;
    }
    if (num < 0) {
        if (num > maxValue) {
            maxValue = num;
        }
    }
    else{
       if (num > maxValue) {
            maxValue = num;
       }
    }
    
}

print(maxValue);