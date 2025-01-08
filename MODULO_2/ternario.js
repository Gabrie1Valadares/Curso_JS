/*//operações ternarias
const pontuacaoUSuario = 1000;
//(condicao) ? 'Valor para verdadeiro' : 'Valor para falso';
const nivelUsuario =
  pontuacaoUSuario >= 1000 ? "Usuário VIP" : "Usuário normal";
const corUsuario = "Pink";
const corPadrao = corUsuario || "Preta";

console.log(nivelUsuario, corPadrao);

if (pontuacaoUSuario >= 1000) {
  console.log("Usuário VIP");
} else {
  console.log("Usuário normal");
}*/

/*
//ATRIBUIÇÃO VIA DESESTRUTURAÇÃO
const numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90];
const [um, , tres, , cinco] = numeros;
console.log(um, tres, cinco);

const numeros = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(numeros[1][2]);


//ATRIBUIÇÃO EM DESESTRUTURAÇÃO UTILIZANDO ARRAYS
const numeros = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
const [lista1, lista2, lista3] = numeros;
console.log(lista3[3]);
*/
//ATRIBUIÇÃO VIA DESESTRUTURAÇÃO (OBJETOS)

const pessoa  = { 
  nome: 'ana',
  sobrenome : 'maria',
  idade: 20,
  endereco: {
    rua ' suecia',
    numero: 123
  }
};
//ATRIBUIÇÃO VIA DESESTRUTURAÇÃO (OBJETOS)
const { endereco: {rua, numero}, endereco } = pessoa; 
console.log(rua, numero, endereco);