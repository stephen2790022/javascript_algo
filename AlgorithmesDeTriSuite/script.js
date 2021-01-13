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
  // Tri à fusion
  //============================================

  let totalFusion = 0;
  const fusionSort = (numbers) => {
    if (numbers.length <= 1) return numbers;

    const middle = Math.floor(numbers.length / 2);

    const left = numbers.slice(0, middle);
    const right = numbers.slice(middle);

    return fusionMerge(fusionSort(left), fusionSort(right));
  }

  const fusionMerge = (left, right) => {
    let resultArray = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
      totalFusion++;
      if (left[leftIndex] < right[rightIndex]) {
        resultArray.push(left[leftIndex]);
        leftIndex++;
      } else {
        resultArray.push(right[rightIndex]);
        rightIndex++;
      }
    }

    return resultArray.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
  }
  console.log(fusionSort(arr))
  console.log(`Tri par fusion ${totalFusion} comparaisons`)

  //============================================
  // Tri cocktail
  //============================================

  const cocktailSort2 = (arr) => {
    let isSorted = true;
    let count = 0;
    while (isSorted) {
      for (let i = 0; i < arr.length - 1; i++) {
        count++;
        if (arr[i] > arr[i + 1]) {
          let temp = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = temp;
          isSorted = true;
        }
      }

      if (!isSorted)
        break;

      isSorted = false;

      for (let j = arr.length - 1; j > 0; j--) {
        if (arr[j - 1] > arr[j]) {
          let temp = arr[j];
          arr[j] = arr[j - 1];
          arr[j - 1] = temp;
          isSorted = true;
        }
      }
    }
    console.log(`Tri Cocktail : ${count} comparaison - ${arr}`);
  }
  console.log(cocktailSort2(arr))

  //============================================
  // Tri a peigne 
  //============================================

  const combSort = (numbers) => {
    let n = numbers.length;
    let total = 0;

    while (n > 1 || change == true) {
      n = n / 1.3;
      if (n < 1) n = 1;
      let i = 0;
      change = false;
      while (i < numbers.length - n) {
        total ++;
        if (numbers[i] > numbers[i + n]) {
          let tmp = numbers[i];
          numbers[i] = numbers[i + n];
          numbers[i + n] = tmp;
          change = true;
        }
        i ++;
      }

    }
    console.log(`Tri à peigne : ${total} comparaisons - ${numbers}`);
  }
  combSort(arr)
});