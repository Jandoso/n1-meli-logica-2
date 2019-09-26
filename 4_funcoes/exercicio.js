//resposta aqui

/*A Lumelância esta precisando de uma calculadora basica para auxiliar seus prestadores.

O usuário deverá digitar:
    - qual operação quer fazer (somar, subtrair, multiplicar e dividir)
    - qual é o valor 1
    - qual é o valor 2
    
Crie um funções para calcular cada uma das operações.
De acordo com a operação escolhida, utilize o switch para escolher a operação e printar o resultado.
Caso o usuário não escolha nenhuma, deve mostrar "Operação inválida".*/

const r = require("readline-sync")

var operacao = r.question('Qual operação você deseja realizar: sm: Soma, sb: Subtração, mu: Multiplicação e di: Divisão: ')
var valor1 = parseInt(r.question('Qual o primeiro valor (número inteiro: '))
var valor2 = parseInt(r.question('Qual o segundo valor (número inteiro: '))

soma = (v1, v2) => {return v1 + v2}
subtracao = (v1, v2) => {return v1 - v2}
multiplicacao = (v1, v2) => {return v1 * v2}
divisao = (v1, v2) => {return v1 / v2}

switch(operacao){
    case 'sm':
        var sm = soma(valor1, valor2)
        console.log(`A soma dos número ${valor1} e ${valor2} é ${sm}`)
        break;
    case 'sb':
        var sb = subtracao(valor1, valor2)
        console.log(`A subtração dos número ${valor1} e ${valor2} é ${sb}`)
        break;
    case 'mu': 
        var mu = multiplicacao(valor1, valor2)
        console.log(`A multiplicação dos número ${valor1} e ${valor2} é ${mu}`)
        break;
    case 'di':
        var di = divisao(valor1, valor2)
        console.log(`A divisão dos número ${valor1} e ${valor2} é ${di}`)
        break
    default:
        console.log(`Operação inválida`)
}
