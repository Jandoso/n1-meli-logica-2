const r = require("readline-sync")

// 5 - Crie um programa que conte de 10 até 1 de 1 em 1.

let i = 10
while(i>0) {
    console.log(i)
    i--
}

/* 6 - Crie um programa que receba o array = [5, 37, 18, 59, 12, -5] e faça as seguintes operações:
    - Printe o maior;
    - Printe o menor. */

    let numeros = [5, 37, 18, 59, 12, -5]

    let maior = Math.max(...numeros)
    let menor = Math.min(...numeros)

    console.log(`O maior número da array é ${maior} e o menor é ${menor}`)