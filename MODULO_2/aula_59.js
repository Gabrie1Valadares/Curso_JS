//Escreva uma função chamada ePaisagem que receba
//Dois argumentos, largura e altura de uma imagem (number).
//Retorne treu se a imagem estiver mo modo paisagem

//function ePaisagem(largura, altura) {
//  if (largura > altura) {
//    return "Paisagem";
//  }
//  return "Fotografia";
//}
//
//console.log(ePaisagem(10, 20));

//function ePaisagem(largura, altura) {
//  return largura > altura ? true : false;
//}
//console.log(ePaisagem(1920, 1080));
//
//function ePaisagem(largura, altura) {
//  return largura >= altura;
//}
//console.log(ePaisagem(1920, 1080));

// Ultilizando array functions

const ePaisagem = (largura, altura) => largura > altura;
console.log(ePaisagem(1080, 1920));
