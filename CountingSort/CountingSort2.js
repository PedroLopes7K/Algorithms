export function countingSort(array) {
    if (array.length < 2) {
      return array;
    }
    const maxValue = Math.max(...array);
    // console.log(maxValue)
    const counts = new Array(maxValue + 1).fill(0);
    array.forEach(element => {
    //   if (!counts[element]) {
    //     counts[element] = 0;
    //   }
      counts[element]++;
    });
    // console.log(counts);

    let sortedIndex = 0;
    counts.forEach((element, i) => {
        console.log(`${element} -- ${i}`)
      while (element > 0) {
        array[sortedIndex++] = i;
        element--;
      }
    });
    return array;
  }

  const arr = [4, 2, 2, 8, 3, 3, 1,5,6]
console.log(countingSort(arr))