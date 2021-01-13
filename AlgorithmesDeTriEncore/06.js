const fs = require('fs');

const fileName = process.argv[2];

// Méthode asynchrone
fs.readFile(fileName, 'utf8', (error, data) => {
  if (error) {
    console.error(error.message);
    return;
  }

  //_________Array_________________
  const arr = data.split(' ').map(x => parseInt(x, 10));


  //============================================
  // Exercice 6
  //============================================

  const west = (numbers) => {
    let building = [];
    let ref = numbers.length - 1;
    for (let i = numbers.length - 2; i > 0; i--){
      console.log(numbers[ref] + '************')
      console.log(numbers[i] + 'pppppppppppppp')
      if(numbers[ref] < numbers[i]) {
        building.push(numbers[i]);
        ref = i;
      }
    }
    building.push(numbers[numbers.length - 1]);
    return building.length;
  }
  console.log(west(arr))
});