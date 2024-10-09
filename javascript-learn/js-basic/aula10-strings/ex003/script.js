const name1 = prompt(`Digite seu nome completo:`);
document.body.innerHTML += `O seu nome é: <strong>${name1}</strong><br /> `;

document.body.innerHTML += `Seu nome tem ${name1.length} Letras<br />`;
document.body.innerHTML += `A segunda letra do seu nome é: ${name1[1]}<br />`;
document.body.innerHTML += `Qual o primeiro indice da letra "s" no seu nome? ${name1.search(`s`)}<br />`;
document.body.innerHTML += `Qual o ultimo indice da letra "s" no seu nome? ${name1.lastIndexOf(`s`)}<br />`;
document.body.innerHTML += `As ultimas 3 letras do seu nome são: ${name1.slice(-3)}<br />`;
document.body.innerHTML += `Seu nome com letras maiusculas: ${name1.toUpperCase()}<br />`;
document.body.innerHTML += `Seu nome com letras minusculas: ${name1.toLowerCase()}<br />`;

