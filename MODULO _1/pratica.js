const numero = Number(prompt("Digite um número"));
const numeroTitulo = document.getElementById("numero1");
const textos = document.getElementById("texto");

numeroTitulo.innerHTML = numero;
textos.innerHTML = "";
textos.innerHTML += `<p>_Raiz quadrada: ${numero ** 0.5}.</p>`;
textos.innerHTML += `<p>_${numero} é inteiro; ${Number.isInteger(numero)}.</p>`;
textos.innerHTML += `<p>_Arredondando para baixo: ${Math.floor(numero)}.</p>`;
textos.innerHTML += `<p>_Arredondando para cima: ${Math.ceil(numero)}.</p>`;
textos.innerHTML += `<p>_NaN: ${numero.isNaN(numero)}.</p>`;
textos.innerHTML += `<p>_Com duas casas decimais :${numero.toFixed(2)}.</p>`;
