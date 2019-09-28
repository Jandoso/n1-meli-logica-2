const r = require("readline-sync")

// 1 - Crie um programa que printe a frase "Olá eu sou a [seu nome aqui]".

console.log("Olá, eu sou a Carol!")

//2 - Crie um programa que irá converter o uma quantia de real para dolar utilizando a cotação do dia.

let real = parseInt(r.question("Digite o valor que deseja converter: R$"))
let dolar = real * 0.24

console.log(`Convertendo R$${real} em dolár é US$${dolar}`)

/* 3 - Crie um programa que receba um valor e printe a mensagem:
    - “Dentro”, se estiver entre 3 e 5
    - “Fora” se estiver fora do intervalo 4 e 7. */

let valor = parseInt(r.question("Digite um valor de 0 a 10: "))

if (valor >= 3 && valor <= 5) {
    console.log("Dentro")
} else if (valor < 4 || valor > 7) {
    console.log("Fora")
}

/*    4 - Crie um programa que receba duas notas de um aluno, calcule a média e mostre se ele foi aprovado!
    - Se a nota for maior ou igual a 6, printar "Aprovado"
    - Se a nota for maior ou igual a 5, printar "Recuperação"
    - Se for menor que a nota de recuperação, printar "Reprovado" */

let nota1 = parseInt(r.question("Informe a primeira nota do aluno: "))
let nota2 = parseInt(r.question("Informe a segunda nota do aluno: "))
let media = (nota1 + nota2) / 2

if (media >= 6) {
    console.log(`A média do aluno foi ${media} e ele foi Aprovado`)
} else if (media >= 5 && media < 6) {
    console.log(`A média do aluno foi ${media} e ele está em Recuperação`)
} else {
    console.log(`A média do aluno foi ${media} e ele foi Reprovado`)
}

/* 5 - Crie um programa de urna eletrônica para receber o voto de sua heroína favorita.
Você deve iniciar o programa mostrando ao usuário qual as opções de voto ele tem, em seguida peça que ele escolha uma das opções:
    - Caso for 0 - voto nulo
    - Caso for 10 - voto Mulher Maravilha
    - Caso for 20 - voto Capitã Marvel
    - Caso não digitar nada, voto vai pra Silvia */

let voto = parseInt(r.question("Olá! Conheça nossas candidatas: 10 - Mulher Maravilha e 20 - Capitã Marvel. Digite 0 para Nulo"))

if (voto == 10) {
    console.log("Você escolheu a Mulher Maravilha!")
} else if (voto == 20) {
    console.log("Você escolheu a Capitã Marvel")
} else if (voto == 0) {
    console.log("Você anulou seu voto!")
} else {
    console.log("Seu voto foi para a Silvia!")
}

/* 6 - Crie um programa que receba o array = [5, 37, 18, 59, 12, -5] e ordene esse array do menor para o maior (sem usar sort). */

let arr = [5, 37, 18, 59, 12, -5]

/* function bubbleSort(recebendo){
let swap
let last = arr.length - 1
do {
    swap = false
    for (let i=0; i < last; i++) {
        if (arr[i] < arr[i +1]) {
            [arr[i], arr[i+1]] = [arr[i+1], arr[i]]
            swap = true
        }
    }
    last --
} while(swap)
return arr
}

bubbleSort(arr)
console.log(arr) */

let maior = 0
let menor = 0 

for (let i = 0; i< arr.length; i++){
    if(arr[i] > maior){
        maior = arr[i]
    }
    if()
}



