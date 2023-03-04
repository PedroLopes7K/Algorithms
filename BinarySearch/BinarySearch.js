/**
 * Pesquisa um item em uma lista
 * @param {Array} lista fornecida
 * @param {number} item a ser encontrado
 * @returns {(number|null)} numero se o indice for encontrado ou null caso não seja
 */
function binary_search(list, item) {
  let low = 0
  let high = list.length - 1

  while (low <= high) {
    const mid = Math.floor((low + high) / 2)
    const guess = list[mid]

    if (guess === item) {
      return mid
    } else if (guess > item) {
      high = mid - 1
    } else {
      low = mid + 1
    }
  }

  return null
}

const my_list = [1, 3, 5, 7, 9]
console.log(binary_search(my_list, 3)) // 1
console.log(binary_search(my_list, -1)) // null
