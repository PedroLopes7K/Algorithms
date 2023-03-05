/**
 * Retorna o fatorial de um numero
 * @param {number} x numero
 * @returns {number} resultado
 */
const fact = x => {
  if (x === 0) return 1
  return x * fact(x - 1)
}

console.log(fact(5))
