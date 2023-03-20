const shellSort = (arr, n = arr.length) => {
    //Reduz o intervalo a cada ciclo
    for (let interval = n / 2; interval >= 1; interval /= 2) {
      //organiza os elementos usando insertion sort a cada ciclo
      for (let i = interval; i < n; i += 1) {
        let temp = arr[i];
        let j;
        for (j = i; j >= interval && arr[j - interval] > temp; j -= interval) {
          console.log(`troca o valor do index ${j} ( ${arr[j]} ) para a o index ${j - interval} (${arr[j - interval]})`)
          arr[j] = arr[j - interval];
        }
        arr[j] = temp;
        // console.log(`valor de j - ${j}  temp - ${temp}`)
      }
      console.log('============')
    //   console.log(arr)
    }
    // console.log(arr)
  }

const arr = [9, 8, 3, 7, 5, 6, 4, 1];
// compara de 0 ate 4 ate o final [ 5, 6, 3, 1, 9, 8, 4, 7 ]
// compara de 0 ate 2 ate o final [3, 1, 4, 6, 5, 7, 9, 8 ]
// compara de 0 ate 1 ate o final [ 1, 3, 4, 5, 6, 7, 8, 9]
shellSort(arr);
// console.log(arr);
