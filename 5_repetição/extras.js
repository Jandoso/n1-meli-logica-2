/* 5) Crie um programa que receba 10 números digitados no cmd. Ordene esse números em ordem crescente usando o Bubble Sort, utilizando loops e printe na tela.
Exemplo:
Recebendo: [5, 350, 15, 36, 5000, 30, 90, 1, 88, 450]
Ordenando: [1, 5, 15, 30, 36, 88, 90, 350, 450, 5000] */

const r = require("readline-sync")

let recebendo = []

let x = 0

while(x < 10) {
    numero = parseInt(r.question("Digite um número: "))
    recebendo.push(numero)
    x++
}

console.log(recebendo)

function bubbleSort(recebendo){
    for (let j = 0; j > recebendo.length - 1; j++){
        for(i = 0; i < recebendo.length-1; i++){
            if(recebendo[i] > recebendo[i+1]){
                [recebendo[i], recebendo[i+1]] = [recebendo[i+1], recebendo[i]]
            }
        }
    }
    return recebendo
}

bubbleSort()