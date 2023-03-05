/**
 * QUICK SORTING
 * @param {Array} array a ordenar
 * @returns {Array} array ordenado
 */
const quickSort = array => {
  if (array.length < 2) return array
  const pivot = array[0]
  const keysAreLessPivot = array.slice(1).filter(key => key <= pivot)
  console.log(`MENORES QUE ${pivot}`)
  console.log(keysAreLessPivot)

  const keysAreMorePivot = array.slice(1).filter(key => key > pivot)
  console.log(`MAIORES QUE ${pivot}`)
  console.log(keysAreMorePivot)
  console.log('//////////////////////')
  return [...quickSort(keysAreLessPivot), pivot, ...quickSort(keysAreMorePivot)]
}

console.log(quickSort([4, 1, 6, 2, 5, 3])) // [1, 2, 3, 4, 5, 6]
