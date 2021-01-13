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
  // Exercice 2
  //============================================
   

  const exercice2 = (array) => {
    let count = 0;
    let max = -1
    for (let i = max + 1 ; i < array.length; i++) {
      for (let j = i + 1; j < array.length; j++) {
        if (array[j] > array[i]) {
          max = j
          i = max
        } 
      }
      count++
    }
    return count
  }
  console.log(exercice2(arr))
});