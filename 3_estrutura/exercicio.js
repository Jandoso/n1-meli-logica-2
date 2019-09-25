//resposta aqui

/*Agora, a Lumelância quer dar descontos para produtos que estão proximos da validade.
Quando os funcionários estiverem reorganizando as prateleiras, eles deverão verificar se o produto esta próximo do vencimento informando quantos dias faltam para o vencimento.

- O array de objetos produtos devem conter os dados
    - nome: string
    - tempoDeValidade: number
    - congelado: boolean

- Exemplo:
    var produtos = [{
        nome: 'Nescau',
        tempoDeValidade: 200, //indicando que a validade dele é de 200 dias
        congelado : false
    }];
    
- O funcionário deverá:
    - Escolher (digitar) um produto do array de objetos: "Escolha um produto entre 0 e x: "
    - Digitar quantos dias faltam para o produto vencer: "Digite quantos dias faltam para vencer: "

- Calcular a porcentagem:
    porcentagem = (diasParaOVencimentoDoProduto * 100) / tempoDeValidadeDoProduto;

- Você deverá:
    - Printar a mensagem "Descartar produto, muito proximo de vencer" caso produto esteja com 2% ou menos de dias para vencer;

    - Printar a mensagem "Desconto!  Produto não congelado e próximo da validade." caso produto não seja congelado e esteja com 10% ou menos de dias para vencer;

    - Printar a mensagem "Desconto! Produto congelado e próximo da validade." caso produto seja congelado e com 5% ou menos de dias para vencer;

    - Printar a mensagem "Produto longe do vencimento." caso produto esteja com mais de 10% dos dias para vencer;*/

var r = require("readline-sync")

let produto = [
    {nome: "Nescau", tempoDeValidade: 300, congelado: false},
    {nome: "Pão Pullman", tempoDeValidade: 7, congelado: false},    
    {nome: "Nuggets", tempoDeValidade: 90, congelado: true},
    {nome: "Batata Frita", tempoDeValidade: 120, congelado: true},
    {nome: "Trakinas", tempoDeValidade: 200, congelado: false}]

let posicao = parseInt(r.question("Escolha um produto entre 0 e 4: "))
let diasParaOVencimentoDoProduto = parseInt(r.question("Digite quantos dias faltam para vencer: "))

let porcentagem = (diasParaOVencimentoDoProduto * 100) / (produto[posicao].tempoDeValidade)


if (porcentagem <= 10 && produto[posicao].congelado == false){
    console.log(`${produto[posicao].nome}: Desconto! Produto não congelado e próximo da validade!`)
} else if(porcentagem <= 5 && produto[posicao].congelado == true){
    console.log(`${produto[posicao].nome}: Desconto! produto congelado e próximo da validade!`)
} else if (porcentagem <= 2){
    console.log(`${produto[posicao].nome}: Descartar produto, muito proximo de vencer`)
}else{
    console.log(`${produto[posicao].nome}: Produto longe do vencimento!`)
}
