// PESQUISA EM LARGURA
const graph = {}
graph.you = ['alice', 'bob', 'claire']
graph.bob = ['anuj', 'peggy']
graph.alice = ['peggy']
graph.claire = ['thom', 'jonny']
graph.anuj = []
graph.peggy = []
graph.thom = []
graph.jonny = []

/**
 * Determinar quem é o vendedor
 * @param {string} name do amigo
 * @returns {boolean} Resultado
 */
const personIsSeller = name => name[name.length - 1] === 'm' // se o nome termina com "m", esse é o vendedor

/**
 * encontra um vendedor de manga
 * @param {string} name do amigo
 * @returns {boolean} resultado da pesquisa
 */
const search = name => {
  let searchQueue = [...graph[name]]
  // Esta array é como você acompanha quais pessoas você pesquisou antes.
  const searched = []
  while (searchQueue.length) {
    const person = searchQueue.shift()
    // Pesquise esta pessoa apenas se você ainda não a pesquisou
    if (searched.indexOf(person) === -1) {
      if (personIsSeller(person)) {
        console.log(`${person} is a mango seller!`)
        return true
      }
      searchQueue = searchQueue.concat(graph[person])
      // Marca como pesquisada
      searched.push(person)
    }
  }
  return false
}

search('you') // thom é o vendedor de manga
