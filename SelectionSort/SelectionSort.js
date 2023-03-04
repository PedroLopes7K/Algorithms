/**
 * Encontra co elemento com o  menor valor do array
 * @param {Array} array fornecido
 * @returns {number} indice do elemento com menor valor
 */
const findSmallestIndex = array => {
  let smallestElement = array[0] // guarda o primeiro valor
  let smallestIndex = 0 // guarda  o indice do primeiro valor

  for (let i = 1; i < array.length; i++) {
    // compara ate encontrar o indice do menor valor do array
    if (array[i] < smallestElement) {
      smallestElement = array[i]
      smallestIndex = i
    }
  }

  return smallestIndex // retorna o indice do menor elemento do array
}

/**
 * ordenando array
 * @param {Array} array fornecido
 * @returns {Array} novo array ordenado
 */
const selectionSort = array => {
  const sortedArray = []
  const copyArray = [...array]

  for (let i = 0; i < array.length; i++) {
    // encontra o indice do menor elemento do array
    const smallestIndex = findSmallestIndex(copyArray)
    // remove o menor elemento do array fornecido
    //e adiciona ao novo array ordenado

    sortedArray.push(copyArray.splice(smallestIndex, 1)[0])
    // o metodo splice retorna um array contendo os elementos removidos
    // nesse caso, apenas 1, com o indice 0
    // uso o [0] após a função para retornar o unico elemento, mas sem o formato de array
  }
  return sortedArray
}

const sourceArray = [5, 3, 6, 2, 10]
const sourtedArray = selectionSort([5, 3, 6, 2, 10])

console.log('Source array - ', sourceArray) // [5, 3, 6, 2, 10]
console.log('New sorted array - ', sourtedArray) // [2, 3, 5, 6, 10]
