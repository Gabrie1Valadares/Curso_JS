/*Gabriel Cordeiro tem 22 anos, pesa 55 kg 
tem 1.7 de altura e seu IMC é de 19.031141868512112 */

const nome = "Gabriel Cordeiro";
const sobrenome = "Valadares";
const idade = 22;
const peso = 55;
const alturaEmM = 1.7;
let imc;
let anoNascimento;

imc = peso / (alturaEmM * alturaEmM);
anoNascimento = 2023 - idade;
console.log(` ${nome} ${sobrenome} tem ${idade} amos, pesa ${peso} kg 
tem ${1.7} de altura e seu IMC é de ${imc} `);
