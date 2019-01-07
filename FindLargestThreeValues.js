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
    '6',
    '9',
    '11',
    '3',
    '2',
    '1',
    '8'// This is the first line from the test.
    // This is the second line from the test.
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

// Solution of the problem. All the above code is for local testing. The test variable is with the first test case 2 + 2 = 4

let count = +gets();
let largest = Number.NEGATIVE_INFINITY;
let secondLargest = Number.NEGATIVE_INFINITY;
let thirdLargest = Number.NEGATIVE_INFINITY;

for (let i = 0; i < count; i++) {
    let num = +gets();

    if (num > largest) {
        // This order of assignment is important
        thirdLargest = secondLargest
        secondLargest = largest
        largest = num
    }
    else if (num > secondLargest) {
        thirdLargest = secondLargest
        secondLargest = num
    }
    else if (num > thirdLargest) {
        thirdLargest = num
    }
} 

print(`${largest}, ${secondLargest} and ${thirdLargest}`);