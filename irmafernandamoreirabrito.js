//1️⃣  Imprimindo Números Pares
function imprimePares(N) {
  console.log(`Números pares de 0 até ${N}:`);
  const pares = [];
  for (let i = 0; i <= N; i++) {
    if (i % 2 === 0) {
      console.log(i);
      pares.push(i);
    }
  }
  return pares;
}

// Teste da função
const resultado = imprimePares(10);
console.log("Array de números pares retornado:", resultado);

//2️⃣ Soma dos Números de um Array
function somaArray(arr) {
  if (!Array.isArray(arr) || arr.some(isNaN)) {
    throw new Error("Entrada inválida. Forneça um array de números.");
  }
  return arr.reduce((acumulador, numeroAtual) => acumulador + numeroAtual, 0);
}

// Teste da função
try {
  const arrayTeste = [1, 2, 3, 4, 5];
  const soma = somaArray(arrayTeste);
  console.log(`A soma dos elementos do array [${arrayTeste}] é: ${soma}`);
} catch (erro) {
  console.error(erro.message);
}

//3️⃣ Identificar Número Primo
function ePrimo(numero) {
  if (typeof numero !== 'number' || !Number.isInteger(numero)) {
    throw new Error("Entrada inválida. Forneça um número inteiro.");
  }
  if (numero <= 1) return false;
  if (numero <= 3) return true; 

  if (numero % 2 === 0 || numero % 3 === 0) return false; 
  for (let i = 5; i * i <= numero; i = i + 6) {
    if (numero % i === 0 || numero % (i + 2) === 0) return false;
  }
  return true;
}

// Teste da função
try {
  const numerosTeste = [1, 2, 3, 4, 5, 16, 17, 18, 19, 20];
  numerosTeste.forEach(numero => {
    console.log(`O número ${numero} é primo? ${ePrimo(numero)}`);
  });
} catch (erro) {
  console.error(erro.message);
}

//4️⃣ FizzBuzz
function fizzBuzz() {
  console.log("Sequência FizzBuzz de 1 a 50:");
  const resultado = [];
  for (let i = 1; i <= 50; i++) {
    let saida = "";
    if (i % 3 === 0) {
      saida += "Fizz";
    }
    if (i % 5 === 0) {
      saida += "Buzz";
    }
    const valorFinal = saida || i;
    console.log(valorFinal);
    resultado.push(valorFinal.toString());
  }
  return resultado;
}

// Teste da função
const resultadoFizzBuzz = fizzBuzz();
console.log("Array completo da sequência FizzBuzz:", resultadoFizzBuzz);

// 5️⃣ Contador de Vogais
function contaVogais(str) {
  if (typeof str !== 'string') {
    throw new Error("Entrada inválida. Forneça uma string.");
  }
  const vogais = "aeiouAEIOUáéíóúÁÉÍÓÚàèìòùÀÈÌÒÙãõÃÕâêîôûÂÊÎÔÛ";
  let contador = 0;
  for (let i = 0; i < str.length; i++) {
    if (vogais.includes(str[i])) {
      contador++;
    }
  }
  return contador;
}

// Teste da função
try {
  const textoTeste = "Olá, mundo! Este é um teste com várias vogais.";
  const totalVogais = contaVogais(textoTeste);
  console.log(`O texto "${textoTeste}" contém ${totalVogais} vogais.`);
} catch (erro) {
  console.error(erro.message);
}

//6️⃣ Tabuada de um Número
function tabuada(numero) {
  if (typeof numero !== 'number') {
    throw new Error("Entrada inválida. Forneça um número.");
  }
  console.log(`Tabuada de ${numero}:`);
  const resultadoTabuada = [];
  for (let i = 1; i <= 10; i++) {
    const linha = `${numero} x ${i} = ${numero * i}`;
    console.log(linha);
    resultadoTabuada.push(linha);
  }
  return resultadoTabuada;
}

// Teste da função
try {
  const numeroTeste = 5;
  const resultado = tabuada(numeroTeste);
  console.log("Resultado completo da tabuada:", resultado);
} catch (erro) {
  console.error(erro.message);
}

//7️⃣ Inverter String
function inverteString(str) {
  if (typeof str !== 'string') {
    throw new Error("Entrada inválida. Forneça uma string.");
  }
  return str.split("").reverse().join("");
}

// Teste da função
try {
  const textoTeste = "hello";
  const textoInvertido = inverteString(textoTeste);
  console.log(`A string "${textoTeste}" invertida é: "${textoInvertido}"`);
} catch (erro) {
  console.error(erro.message);
}

//8️⃣ Encontre o Maior Número
function maiorNumero(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("Entrada inválida. Forneça um array.");
  }
  if (arr.length === 0) {
    return undefined;
  }
  if (arr.some(isNaN)) {
    throw new Error("Entrada inválida. O array deve conter apenas números.");
  }
  let maior = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maior) {
      maior = arr[i];
    }
  }
  return maior;
}

// Teste da função
try {
  const arrayTeste = [3, 10, 6, 2];
  const maior = maiorNumero(arrayTeste);
  console.log(`O maior número no array [${arrayTeste}] é: ${maior}`);
} catch (erro) {
  console.error(erro.message);
}

//9️⃣ Palíndromo
function ePalindromo(str) {
  if (typeof str !== 'string') {
    throw new Error("Entrada inválida. Forneça uma string.");
  }
  
  const strNormalizada = str.toLowerCase().replace(/[\s.,\/#!$%\^&\*;:{}=\-_`~()?'"]/g, "");
  const strInvertida = strNormalizada.split("").reverse().join("");
  return strNormalizada === strInvertida;
}

// Teste da função
try {
  const teste1 = "Ame a ema";
  const teste2 = "Olá mundo";
  console.log(`"${teste1}" é um palíndromo? ${ePalindromo(teste1)}`); // true
  console.log(`"${teste2}" é um palíndromo? ${ePalindromo(teste2)}`); // false
} catch (erro) {
  console.error(erro.message);
}

//1️⃣0️⃣ Média de Notas
function calculaMedia(notas) {
  if (!Array.isArray(notas) || notas.length === 0) {
    throw new Error("Entrada inválida. Forneça um array de notas não vazio.");
  }
  if (notas.some(isNaN) || notas.some(n => n < 0)) {
    throw new Error("Entrada inválida. As notas devem ser números não negativos.");
  }

  const soma = notas.reduce((acumulador, nota) => acumulador + nota, 0);
  const media = soma / notas.length;
  const mediaFormatada = media.toFixed(1); // Formata para uma casa decimal

  if (media >= 7) {
    return `Aprovado - Média: ${mediaFormatada}`;
  } else {
    return `Reprovado - Média: ${mediaFormatada}`;
  }
}

// Teste da função
try {
  const notasTeste1 = [8, 7, 6];
  const notasTeste2 = [5, 6, 4];
  console.log(`Notas: [${notasTeste1}] - Resultado: ${calculaMedia(notasTeste1)}`); // Aprovado - Média: 7.0
  console.log(`Notas: [${notasTeste2}] - Resultado: ${calculaMedia(notasTeste2)}`); // Reprovado - Média: 5.0
} catch (erro) {
  console.error(erro.message);
}