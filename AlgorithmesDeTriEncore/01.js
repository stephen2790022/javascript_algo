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
  // Exercice 1
  //============================================

  const exercice1 = (array, k) => {
    
    for (let i = 0; i < array.length; i++) {
      for (let j = i + 1; j < array.length; j++) {
        if (array[i] + array[j] === k) {
          return true;
        }
      }
    }
  }
  console.log(exercice1(arr, 73))

});