/* 5) Crie um programa que receba 10 números digitados no cmd. Ordene esse números em ordem crescente usando o Bubble Sort, utilizando loops e printe na tela.
Exemplo:
Recebendo: [5, 350, 15, 36, 5000, 30, 90, 1, 88, 450]
Ordenando: [1, 5, 15, 30, 36, 88, 90, 350, 450, 5000] */

/* const r = require("readline-sync")

let recebendo = []

let x = 0

while(x < 10) {
    numero = parseInt(r.question("Digite um número: "))
    recebendo.push(numero)
    x++
}

console.log(recebendo)

function bubllesort(recebendo){
    let swap;
    let last = recebendo.length - 1
    do {
        swap = false
        for (let i=0; i < last; i++) {
            if (recebendo[i] > recebendo[i +1]) {
                [recebendo[i], recebendo[i+1]] = [recebendo[i+1], recebendo[i]]
                swap = true
            }
        }
        last --
    } while(swap)
    return recebendo
}

bubllesort(recebendo)
console.log(recebendo) 

/* 6) Agora, crie um programa que receba 10 números digitados no cmd. Ordene esse números em ordem decrescente usando o Bubble Sort, utilizando loops e printe na tela.
Exemplo:
Recebendo: [5, 350, 15, 36, 5000, 30, 90, 1, 88, 450]
Ordenando: [5000, 450, 350, 90, 88, 36, 30, 15, 5, 1] */

/* function bubllesort(recebendo){
    let swap;
    let last = recebendo.length - 1
    do {
        swap = false
        for (let i=0; i < last; i++) {
            if (recebendo[i] < recebendo[i +1]) {
                [recebendo[i], recebendo[i+1]] = [recebendo[i+1], recebendo[i]]
                swap = true
            }
        }
        last --
    } while(swap)
    return recebendo
}

bubllesort(recebendo)
console.log(recebendo)

/* 7) Dada a lista [10,11,12,13], a cada par troque os números de lugar. Utilizando loopd, você não poderá modificar os valores da lista, apenas trocar os indeces de lugar.
Resultado esperado: [11,10,13,12] */
/* let lista = [10, 11, 12, 13]

function bubllesort(lista) {
    let swap
    let last = lista.length - 1
    do {
        swap = false
        for (let i = 0; i < last; i=i+2){
            [lista[i], lista[i+1]] = [lista[i+1], lista[i]]
            swap = true
        }
        last --
    } while(swap)
    return lista
    
}

bubllesort(lista)
console.log(lista)

/* 8) Dados n pares de parênteses, crie um programa para gerar todas as combinações de parênteses possíveis.
Exemplo: 
Recebendo: n = 3
Resposta esperada: 
[
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
] */




