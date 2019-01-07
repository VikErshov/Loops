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
    '2',
    '5',
    '1' // This is the first line from the test.
     // This is the second line from the test.
  ];
  
  const gets = this.gets || getGets(test);
  const print = this.print || console.log;
  
  // Solution of the problem. All the above code is for local testing. The test variable is with the first test case 2 + 2 = 4

let count = +gets();
let element = 0;
let minElement = null;
let maxElement = null;
let sum = 0;
let average = 0;

for (let i = 0; i < count; i++) {
    element = +gets();
    if (element < minElement || minElement === null) {
        minElement = element
    }

    if (maxElement < element || maxElement === null) {
        maxElement = element;
    }

    sum += element;
}

average = sum / count;


print(`min=${minElement.toFixed(2)}`);
print(`max=${maxElement.toFixed(2)}`);
print(`sum=${sum.toFixed(2)}`);
print(`avg=${average.toFixed(2)}`);
