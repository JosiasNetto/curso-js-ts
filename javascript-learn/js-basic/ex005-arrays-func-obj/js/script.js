//Main func
function main() {
    //the form object of the html
    const form = document.querySelector('.form');

    //The result div objeect of the html
    const resultado = document.querySelector('.resultado');

    //Array that stores the submited values
    const pessoas = [];

    /*
    One method to prevent the page to reupload for itself
    form.onsubmit = function(evento) {
        evento.preventDefault()
        alert(1)
        console.log(2)
    };*/

    //COntrol func when the form is submitted
    function recebeEventoForm(evento){
        evento.preventDefault();    //Prevent the default actions when the form is submitted

        const nome = form.querySelector('.nome');   //Store the input of name
        const sobreNome = form.querySelector('.sobrenome'); //Store the input of last name
        const peso = form.querySelector('.peso');   //Store the input of the weight
        const altura = form.querySelector('.altura');   //Store the input of the height

        //Add the submitted values to the array
        pessoas.push({nome: nome.value, sobrenome: sobreNome.value, peso: peso.value, altura:altura.value})
        console.log(pessoas)

        //Write the submitted values in the result div
        resultado.innerHTML += `<p> Seu Nome é: ${nome.value}</p>`
        resultado.innerHTML += `<p> Seu Sobrenome é: ${sobreNome.value}</p>`
        resultado.innerHTML += `<p> Seu Peso é: ${peso.value}</p>`
        resultado.innerHTML += `<p> Sua Altura é: ${altura.value}</p>`


    };

    form.addEventListener('submit', recebeEventoForm);  //Func that `listen` when the form is submited, and execute the argument function

}

main();

