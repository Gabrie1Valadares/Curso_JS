/*
  OPERADORES DE COMPARAÇÃO 
  > MAIOR QUE 
  >= MAIOR QUE OU IGUAL A 
  <MENOR QUE 
  <= MENOR QUE OU IGUAL A
  == IGUALDADE DE VALOR (NÃO é UTILIZADO)
  === IGUALDADE ESTRITA ( VALOR e TIPO)
  != DIFERENÇA DE VALOR (NÃO é UTILIZADO)
  !== DIFERENÇA ESTRITA (VALOR é TIPO)

 OPERADORES  LÓGICOS 
 && - > AND -> E -> (Todas as expressões precisam ser verdadeiras para retornar true)
 || -> OR -> OU  ->  (todas as expressões precisam ser falsa para da falso)
 ! -> NOT -> NÃO

  ESTRUTURAS CONDICIONAIS 

  // IF pode ser usado sozinho 
  // Sempre que utilizo a palavra eles, preciso de um iF antes 
  // Eu passo ter várias else IFS na checagem 
  // Só posso ter um else na checagem 
  */

// EX
/*
  let  horas = 10;
  
if (hora >=0 && hora <= 11) {
    console.log('Bom dia');
  }eLse if (hora >= 12 && hora <= 17) {
    console.log('Boa tarde');
  }else if (hora >= && hora <= 23) {
    console.log('Boa noite');
  }else {
    console.log('Olá');
  }
// ALGUNS EXEMPLOS
let numero = 5;
// Se ( numero >= 0 && numero <= 5) ocorrer, faça isso {código}
// Se não faça isso {o código}
if (numero >= 0 && numero <= 10) {
  console.log("O número está entre 0 e 5.");
} else if (numero >= 6 && numero <= 8) {
  console.log("o número está entre 6 e 8");
} else is (numero >= && numero <= 11) {
  console.log('O número está entre 9 e 11.');
} else {
  console.log('O número não está entre 0 e 11');
}
*/
//Let tem escopo de bloco {...Bloco}

const form = document.querySelector("#formularia");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const inputPeso = e.target.querySelector("#peso");
  const inputAltura = e.target.querySelector("#altura");

  const peso = Number(inputPeso.value);
  const altura = Number(inputAltura.value);

  if (!peso) {
    setResultado("Peso inválido", false);
    return;
  }

  if (!altura) {
    setResultado("Altura inválida", false);
    return;
  }

  const imc = getImc(peso, altura);
  const nivelImc = getNivelImc(imc);

  const msg = `Seu IMC é ${imc} (${nivelImc}).`;

  setResultado(msg, true);
});

function getNivelImc(imc) {
  const nivel = [
    "Abaixo do Peso",
    "Peso normal",
    "sobrepeso",
    "Obesidade grau 1",
    "Obesidade grau 2",
    "Obesidade grau 3",
  ];

  if (imc >= 39.9) {
    return nivel[5];
  }
  if (imc >= 34.9) {
    return nivel[4];
  }
  if (imc >= 29.9) {
    return nivel[3];
  }
  if (imc >= 24.9) {
    return nivel[2];
  }
  if (imc >= 18.5) {
    return nivel[1];
  }
  if (imc < 18.5) {
    return nivel[0];
  }
}

function getImc(peso, altura) {
  const imc = peso / altura ** 2;
  return imc.toFixed(2);
}

function criaP() {
  const p = document.createElement("p");
  return p;
}

function setResultado(msg, isValid) {
  const resultado = document.querySelector("#resultado");
  resultado.innerHTML = "";

  const p = criaP();

  if (isValid) {
    p.classList.add("paragrafo-resultado");
  } else {
    p.classList.add("bad");
  }

  p.innerHTML = msg;
  resultado.appendChild(p);
}
