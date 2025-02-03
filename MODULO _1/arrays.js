//               0       1         2 (Um array sempre começa no indece 0)
//const alunos = ["Luiz", "Maria", "João"];
//console.log(alunos);

//delete alunos[1]; Essa tag apaga um item, porem não interfere no indece

//alunos.pop(); Utilizado para  remover um item (no cado o último)
//alunos.shift(); Utilizado para  remover um item (no cado o primeiro)

//alunos.unshift('Luiza'); Uma forma de adicionar um item no começo do array

// Ambos os termos adicionam mais 1 item ao meu array
//alunos.push('Eduardo');
//alunos.push('Fábio');;=
//alunos[alunos.length] = "Eduardo";
//alunos[alunos.length] = "Fernando";

//alunos[0] = 'Vitoria'; Altera um item
//alunos[0] = 'João'; adiciona um item

//console.log(alunos);
//console.log(alunos[o]);
//console.log(alunos[2]);

// ==================================***=============================

//ATRIBUIÇÃO VIA DESESTRUTURAÇÃO

const pessoa = {
  //nome: "Gabriel",
  sobrenome: "Valadares",
  idade: 23,
  endereco: {
    rua: "Rua suécia",
    numero: 29,
  },
};

//ATRIBUIÇÃO VIA DESESTRUTURAÇÃO

//const { nome = "Não existe", sobrenome } = pessoa;
const {
  endereco: { rua, numero },
} = pessoa;

console.log(rua, numero);

//Também é possível utilizar a Fun
