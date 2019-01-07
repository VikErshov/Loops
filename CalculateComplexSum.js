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
    '3',
    '2' // This is the first line from the test.
     // This is the second line from the test.
  ];
  
  const gets = this.gets || getGets(test);
  const print = this.print || console.log;
  
  // Solution of the problem. All the above code is for local testing. The test variable is with the first test case 2 + 2 = 4

let N = +gets();
let x = +gets();
let factorial = 1;
let sum = 1;

for (let i = 1; i <= N; i++) {  // big rotation
    for (let j = 1; j <= i; j++) {  // factorial rotation 
       factorial *= j;
        
    }
    sum += factorial / Math.pow(x, i);
    factorial = 1;
}

print(sum.toFixed(5));
