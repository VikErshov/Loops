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
    '8' // This is the first line from the test.
     // This is the second line from the test.
  ];
  
  const gets = this.gets || getGets(test);
  const print = this.print || console.log;
  
  // Solution of the problem. All the above code is for local testing. The test variable is with the first test case 2 + 2 = 4

  cardSign = gets();
  let count = +cardSign;
  let card = null;
  
      switch(cardSign) {
      case 'J':
        count = 11;
      break;
      case 'Q':
        count = 12;
      break;
      case 'K':
        count = 13;
      break;
      case 'A':
        count = 14;
      break;
  } 

  for (let i = 2; i <= count; i++) {
    card = i;
    if(i === 11) {
      card = 'J'
    }
    if(i === 12) {
      card = 'Q'  
    }
    if(i === 13) {
      card = 'K'
    }
    if(i === 14) {
      card = 'A'
    }
    
    print(`${card} of spades, ${card} of clubs, ${card} of hearts, ${card} of diamonds`);

  }
