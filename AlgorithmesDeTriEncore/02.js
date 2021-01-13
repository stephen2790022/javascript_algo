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
    for (let i = 0; i < array.length; i++) {
      for (let j = i + 1; j < array.length; j++) {
        if (array[j] > array[i]) {
          i = j
        }
      }
      count++
    }
    return count
  }
  console.log(exercice2(arr))
});