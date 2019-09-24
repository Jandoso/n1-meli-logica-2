//resposta aqui

/*- Crie variaveis para o guardar o nome, idade, se é a primeira vez e uma lista produtos favoritos do cliente
- Atribua valores a essas variaveis
- Crie um objeto que irá receber os valores dessa variaveis e o imprima o objeto no console */

let nome = "Caroline"
let idade = 27
let primeiraCompra = true 
let produtosFavoritos = ["cervejas", "frutas", "saladas"]

let cliente = {
    nome: nome,
    idade: idade,
    primeiraCompra: primeiraCompra,
    produtosFavoritos: produtosFavoritos
}

console.log(cliente)