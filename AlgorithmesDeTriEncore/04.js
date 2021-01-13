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
  // Exercice 4
  //============================================
  function exo4(array) {
    let count = 0;
    if (array.length > 1) {
      for (i = 1; i < array.length; i++) {
        if (array[0] > array[i]) {
          count++;
        } else {
          exo4(array.splice(0, 1))
        }
      }
    }
    return count + 1;
  }
  console.log(exo4(arr))


});