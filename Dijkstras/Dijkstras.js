// GRAFO
const graph = {}
graph.start = {}
graph.start.a = 6
graph.start.b = 2

graph.a = {}
graph.a.fin = 1

graph.b = {}
graph.b.a = 3
graph.b.fin = 5

graph.fin = {}

// TABELA DOS CUSTOS
const costs = {}
costs.a = 6
costs.b = 2
costs.fin = Infinity

// TABELA DOS PAIS
const parents = {}
parents.a = 'start'
parents.b = 'start'
parents.fin = null

let processed = []

/**
 * menor nó
 * @param {Object} itCosts tabela hash
 * @returns {(string|null)} menor nó
 */
const findLowestCostNode = itCosts => {
  let lowestCost = Infinity
  let lowestCostNode = null

  Object.keys(itCosts).forEach(node => {
    const cost = itCosts[node]
    //Se for o menor custo até o momento e ainda não foi processado...
    if (cost < lowestCost && !processed.includes(node)) {
      // ... define esse nó como o menor custo.
      lowestCost = cost
      lowestCostNode = node
    }
  })
  return lowestCostNode
}

let node = findLowestCostNode(costs)

while (node !== null) {
  const cost = costs[node]
  // percorre sobre os vizinhos desse nó
  const neighbors = graph[node]
  Object.keys(neighbors).forEach(n => {
    const newCost = cost + neighbors[n]
    // Se é mais barato chegar a este vizinho (n) passando por este nó (node)
    if (costs[n] > newCost) {
      // ... atualiza o custo do nó n (vizinho)
      costs[n] = newCost
      // esse nó (node) se torna o novo pai para esse vizinho (n)
      parents[n] = node
    }
  })

  // marca esse nó como já processado
  processed.push(node)

  // encontra o proximo nó para processar é continua o loop
  node = findLowestCostNode(costs)
}

console.log('Custo do inicio para cada nó:')
console.log(costs) // { a: 5, b: 2, fin: 6 }
