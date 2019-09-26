/*Utilizando for, while ou do.. while, faça os seguintes exercícios:

1) Crie um programa para printar todos os números pares de 1 a 100.
- Números pares são todos os números que dividos por 2 tem resto 0
- Qual operador que retorna o resto da divisão? Vamos usar ele!

2) Crie um programa gerador de estrelas. O usuário informa um número, e o programa gera uma pirâmide de estrelas no seguinte formato:
// Ex.: Usuário informa 5 e o programa retorna
// *
// * *
// * * *
// * * * * 
// * * * * * 
- Você pode concatenar uma string usando: + ou +=

3) Crie um programa que pergunta ao usuário seu nome. Depois que o usuário digitar o nome, o programa deverá responder "Olá [nome]".
Enquanto usuário digitar qualquer palavra, print o que ele está digitando mas avise que para sair ele pode dizer "Tchau".
O programa vai dizer "Tchau [nome]" e finalizar o programa.
- Aqui você pode usar while ou do/while para resolver

4) Crie um  programa contador de passos, que acumule os valores de passos informados pelo usuário até que a meta seja atingida.
A meta a ser atingida é de 500 passos.
- Aqui você pode usar while ou do/while para resolver, mas tente resolver com o que você não utilizou no exercicio 3. */
const r = require("readline-sync")

let i = 0

while (i<= 100){
    console.log(i)
    i = i+2
}
//--------------------------------

let quantidade = parseInt(r.question("Quantas linhas de estrelas voce deseja?: "))
let estrela = "*"


for ( let i = 0; i < quantidade; i++){
    console.log(estrela)
    estrela+="*"
}

//--------------------------------

let nome = r.question("Informe seu nome: ")
console.log(`Olá, ${nome}!`)
let palavra = ""

while (palavra != "exit"){
    palavra = r.question("Digite uma palavra. Digite exit para sair: ")
    console.log(palavra)
}

console.log(`Tchau, ${nome}!`)

//--------------------------------

let passos = 0

do{
    novosPassos = parseInt(r.question("Informe a quantidade de passos: "));
    passos = passos + novosPassos
}while(passos <= 500);

