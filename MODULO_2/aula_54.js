//const frutas = ["Pera", "Uva", "manga"];

//for (let i = 0; i < frutas.length; i++) {
//  console.log(frutas[i]);
//}

// IMPORTANTE: For in => lê os indices ou chaves do objetos.
//for (let i in frutas) {
//  console.log(i);
//}

//**************************************** */

//const pessoa = {
//  nome: "Gabriel",
//  sobrenome: "Valadares",
//  idade: 30,
//};

//for (let i in pessoa) {
//  console.log(pessoa[i]);
//}

//For para atributos iteraveis

//const nome = ["Gabriel", "Ana", "Maria"];

//for (let i = 0; i < nome.length; i++) {
//console.log(nome[i]);
//}

//for (let valor of nome) {
//  console.log(valor);
//}

//nome.forEach(function (valor, indice, array) {
//  console.log(valor, indice, array);
//});

//****************************************

//Ex utilizando Objetos

//IMPORTANTE: For clássico - Geralmente  com iteráveis (array ou strings)
// For in - Retorna o indice ou chave ( string, array ou objetos )
// for o - Retorno o valor em si (iteráveis, arrays ou strings)

const pessoa = {
  nome: "Ana",
  sobrenome: "Maria",
};

for (let chave in pessoa) {
  console.log(chave, pessoa[chave]);
}
