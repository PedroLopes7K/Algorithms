/**
 *
 * @param {number} i
 */
const countdown = i => {
  console.log(i)
  // caso base
  if (i <= 1) return
  // recursão
  countdown(i - 1)
}

countdown(5)
