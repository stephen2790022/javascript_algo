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
  // Exercice 3
  //============================================
  function exercice3(array, k) {
    if (array.length > 1) {
      for (i = 1; i < array.length; i++) {
        if (array[0] + array[i] === k) {
          return true;
        }
      }
      exercice3(array.splice(0, 1), k);
    } else {
      return false;
    }
  }
  console.log(exercice3(arr, 18))
});