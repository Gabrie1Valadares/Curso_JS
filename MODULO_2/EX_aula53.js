const elementos = [
  { tag: "p", texto: "Eu vim" },
  { tag: "p", texto: "EU vi" },
  { tag: "p", texto: "EU venci" },
  { tag: "p", texto: "Veni vidi vici" },
];

const container = document.querySelector(".container");
const div = document.createElement("div");

for (let i = 0; i < elementos.length; i++) {
  let { tag, texto } = elementos[i];
  let tagCriada = document.createElement(tag);
  // tagCriada.innerText = texto;
  let textoCriado = document.createTextNode(texto);

  tagCriada.appendChild(textoCriado);
  div.appendChild(tagCriada);
}

container.appendChild(div);
