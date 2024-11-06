function calcImc (evento) {
    const peso = document.querySelector('.peso');
    const altura = document.querySelector('.altura');

    const imc = parseFloat(peso.value / altura.value);

    return imc;
}

function setResultado(imc) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = ''

    const paragraph = document.createElement('p');

    if (isNaN(imc)) {
        paragraph.innerHTML = `Por favor, digite apenas números`
        paragraph.classList.add('paragrafo-resultado-ruim')
    }
    else if(imc < 18.5){
        paragraph.innerHTML = `Seu IMC é ${imc}, você está abaixo do peso`
    }
    else if(imc < 24.9){
        paragraph.innerHTML = `Seu IMC é ${imc}, você está no peso normal`
    }
    else if(imc < 29.9){
        paragraph.innerHTML = `Seu IMC é ${imc}, você está no sobrepeso`
    }
    else if(imc < 34.9){
        paragraph.innerHTML = `Seu IMC é ${imc}, você está na obesidade grau 1`
    }
    else if(imc < 39.9){
        paragraph.innerHTML = `Seu IMC é ${imc}, você está na obesidade grau 2`
    }
    else if(imc > 40){
        paragraph.innerHTML = `Seu IMC é ${imc}, você está na obesidade grau 3`
    }

    resultado.append(paragraph)


}

function recebeEventoForm(evento) {
    evento.preventDefault();

    const imc = calcImc(evento);

    setResultado(imc);
    
}


function main() {
    const form = document.querySelector('.form');

    form.addEventListener('submit', recebeEventoForm);
}

main()