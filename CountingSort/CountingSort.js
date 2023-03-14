const countingSort = (inputArr, n = inputArr.length) => {
    let k = Math.max(...inputArr)
    console.log(`maior ${k}`)
    console.log(`tamanho do array ${n}`)
    let t
    //Cria um array temporario com o numero de posições do maior elemento do array passado, mais 1
    // e preenche todos com valor 0
    const temp = new Array(k + 1).fill(0)
    console.log(` array temp ${temp}`)
  
    // conta a frequencia de cada elemento no array
    // e armazena no array temporario
    // ex: 3 aparece 2 vezes no array passado
    // entaõ o indice 3 do array temporario armazenara 2
    for (let i = 0; i < n; i++) {
      t = inputArr[i]
      temp[t]++
    }
    console.log(` array temp ${temp}`)
  
    //atualiza o valor de cada elemento somando com o elemento anterior
    // ex: 0,1,2,1,2 transforma em 0,1,3,4,6
    for (let i = 1; i <= k; i++) {
      temp[i] = temp[i] + temp[i - 1]
    }
    console.log(` array temp ${temp}`)
  
    //criar o array de saida, com o mesmo numero de elemnto do array passado
    // e preenche todos como 0
    const outputArr = new Array(n).fill(0)
  
    // começa a interação de tras para frente do array passado
    for (let i = n - 1; i >= 0; i--) {
      t = inputArr[i] // pega o elemento do array passado
  
      // pega o valor que o indice dele armazena (temp[t]) subitrai 1
      // o valor retornado é o indice onde ele deve ser inserido no novo array
      outputArr[temp[t] - 1] = t
  
      // subtrai 1 do valor que o indice do elemento armazena,
      // pois caso o elemento se repita, ele será adicionado um indice abaixo, no novo array
      temp[t] = temp[t] - 1
    }
    console.log(temp)
    // tem = [0, 0, 1, 3,5 ,6,6,6,6  ]
    return outputArr
  }
  
  const arr = [4, 2, 2, 8, 3, 3, 1,1]
  console.log(countingSort(arr))