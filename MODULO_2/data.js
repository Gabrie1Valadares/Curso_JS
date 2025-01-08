/*let data = new Date();

let diaSemana = data.getDay();

console.log(diaSemana);

if (diaSemana === 0) {
  diaSemanaTexto = "Domingo";
} else if (diaSemana === 1) {
  diaSemanaTexto = "Segunda";
} else if (diaSemana === 2) {
  diaSemanaTexto = "Terça";
} else if (diaSemana === 3) {
  diaSemanaTexto = "Quarta";
} else if (diaSemana === 4) {
  diaSemanaTexto = "Quinta";
} else if (diaSemana === 5) {
  diaSemanaTexto = "sexta";
} else if (diaSemana === 6) {
  diaSemanaTexto = "Sábado";
}
*/

function zeroAEsquerda(num) {
  return num >= 10 ? num : `0${num}`;
}

function formataData(data) {
  const dia = zeroAEsquerda(data.getDate());
  const mes = zeroAEsquerda(data.getMonth() + 1);
  const ano = zeroAEsquerda(data.getFullYear());
  const hora = zeroAEsquerda(data.getHours());
  const min = zeroAEsquerda(data.getMinutes());
  const seg = zeroAEsquerda(data.getSeconds());
  return `${dia}/${mes}/${ano}/ ${hora}:${min}:${seg}`;
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);
