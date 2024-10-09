const number1 = Number(prompt(`Digite seu número:`))
const numeroTitulo = document.getElementById(`numero-titulo`)

numeroTitulo.innerHTML = number1
texto.innerHTML += `Raiz quadrada = ${number1 ** (1/2)}<br />`
texto.innerHTML += `${number1} é um inteiro?  ${Number.isInteger(number1)}<br />`
texto.innerHTML += `É NaN?  ${Number.isNaN(number1)}<br />`
texto.innerHTML += `${number1} arrendodado para baixo = ${Math.floor(number1)}<br />`
texto.innerHTML += `${number1} arrendodado para cima = ${Math.ceil(number1)}<br />`
texto.innerHTML += `${number1} com  duas casas decimais = ${number1.toFixed(2)}<br />`
