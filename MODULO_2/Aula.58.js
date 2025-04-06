//Exercicios de logica de programação

// ESCREVA UMA FUNÇÃO QUE RECEBE 2 NÚMEROS E RETORNE O MAIOR DELES

//function max(x, y) {
//  if (x > y) {
//    return x;
//  } else {
//    return y;
//  }
//}
//console.log(max(10, 2));

//function max(x, y) {
//  if (x > y) {
//    return x;
//  }
//  return y;
//}
//
//console.log(max(5, 12));

//function max(x, y) {
//  return x > y ? x : y;
//}
//console.log(max(10, 2));

const max1 = (x, y) => {
  return x > y ? x : y;
};
console.log(max1(10, 22));

const max2 = (a, b) => (a > b ? a : b);
console.log(max2(10, 5));
