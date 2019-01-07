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
    '10' // This is the first line from the test.
     // This is the second line from the test.
  ];
  
  const gets = this.gets || getGets(test);
  const print = this.print || console.log;
  
  // Solution of the problem. All the above code is for local testing. The test variable is with the first test case 2 + 2 = 4

let num = +gets();
let result = ' ';

for (let i = 1; i <= num; i++) {
   if(i % 3 !== 0 && i % 7 !== 0){
       result = result + ' ' + i;
   }
}
  print(result.trim());