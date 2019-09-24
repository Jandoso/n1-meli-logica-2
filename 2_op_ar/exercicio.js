//resposta aqui

/* - Crie uma variável que irá guardar o array com nome e valor dos produtos
- Crie uma variável 'posicao' para guardar o produto escolhido pelo usuário
- Crie uma variável 'porcentagem' que irá guardar qual porcentagem o usuário digitou
- Procure no array qual produto foi escolhido pelo usuário
- Calcule o desconto do produto
- Printe na tela a seguinte frase: "Produto xxx com desconto é R$ xxx"

Dica: você pode usar a função .toFixed(digits) para limitar o numero de casas decimais do desconto. */

var r = require("readline-sync")


let produto = [
    {nome: "tomate", preco: 1.99},
    {nome: "cebola", preco: 1.67}, 
    {nome:"alho", preco: 3.00}]

var posicao = parseInt(r.question("Escolha um produto entre 0 e 2: "))
var porcentagem = parseInt(r.question("Digite uma porcentagem: "))

var produtoSelecionado = produto[posicao]

var desconto = produtoSelecionado.preco * (porcentagem / 100)

console.log("Produto " + produtoSelecionado.nome + " com desconto é R$ " + desconto.toFixed(2))
