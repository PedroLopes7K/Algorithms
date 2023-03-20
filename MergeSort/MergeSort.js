function merge(left, right) {
  console.log(` merge left - ${left}  right - ${right}`)

    let sortedArr = [] // os items ordenados vão aqui
    while (left.length && right.length) {
      // Inserindo o menor item no array sortedArr
      if (left[0] < right[0]) {
        sortedArr.push(left.shift())
      } else {
        sortedArr.push(right.shift())
      }
    }
    // console.log(`sorted - ${sortedArr}   left - ${left}  right - ${right}`)

    // Usando operador spred para juntar os 3 arrays em um
    return [...sortedArr, ...left, ...right]
  }
  
// let time = 0
  function mergeSort(arr) {
    // time++
    // console.log(`array do momento ${arr}, vez ${time}`)
    // Caso base (parada)
    if (arr.length <= 1) return arr
    let mid = Math.floor(arr.length / 2)
    // chamadas recursivas
    let left = mergeSort(arr.slice(0, mid))
    let right = mergeSort(arr.slice(mid))
    // console.log(`left - ${left}  right - ${right}`)
    return merge(left, right)
  }
//  console.log(mergeSort([3, 5, 8, 5, 99, 1])) // [1, 3, 5, 5, 8, 99]
 console.log(mergeSort([7,1,6,3])) 