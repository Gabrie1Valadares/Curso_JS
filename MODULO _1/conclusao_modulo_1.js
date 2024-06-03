//Valores primitivos e valores por referência

/*Primitivos (imutáveis) - String, number, boolean, undefined, null (bigint, symbol) - Valores copiados
  Referência (mutável) - array, object, function - passados por referência 
*/
//EXERCÍCIO MODULO 1

/*function meuEscopo  () {
   const form = document.querySelector(.form);
   form.onsubmit =function (evento) {
    evento.preventDefault();
    alert(1)
    console.log('Foi enviado')
   };
};
meuEscopo(); */

function meuEscopo() {
  const form = document.querySelector(".form");
  const resultado = document.querySelector(".form");

  const pessoas = [];

  function recebeEventoForm(evento) {
    evento.preventDefault();

    const nome = form.querySelector(".nome");
    const sobrenome = form.querySelector(".sobrenome");
    const peso = form.querySelector(".peso");
    const altura = form.querySelector(".altura");

    pessoas.push({
      nome: nome.value,
      sobrenome: sobrenome.value,
      peso: peso.value,
      altura: altura.value,
    });

    console.log(pessoas);
    resultado.innerHTML += `<P>${nome.value} ${sobrenome.value} ${peso.value}
    ${altura.value}</p>`;
  }

  form.addEventListener("submit", recebeEventoForm);
}
meuEscopo();
