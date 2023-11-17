   /* Passo a passo para usar o form
        1- [] Fazer o get do elemento form
        2- [] Adicionar no form o eventListener
            2.1- [] No event listener diga o nome do evento
            2.2- [] Passe uma função anônima para receber o evento como parâmetro
            2.3- [] Use o prevent default no evento recebido como parâmetro
            2.4- [] Chame a função que quiser
        3- [] Crie a função que quiser e pegue os dados do form
        
        */
const form = document.querySelector("form");
form.addEventListener("submit", function(evento){
    evento.preventDefault()
    calcular()
})

const numero1 = document.getElementById("numero1");
const numero2 = document.getElementById("numero2");
const opcoes = document.getElementById("opcoes");

const resultadoCalculo = document.getElementById("resultado-calculo");

function calcular(){
    switch(opcoes.value){
        case "soma":
            soma()
            break;
        case "subtracao":
            subtracao()
            break;
        case "divisao":
            divisao()
            break;
        case "multiplicacao":
            multiplicacao()
            break;
    }
}

function soma(){
    let resultado = Number(numero1.value) + Number(numero2.value)
    resultadoCalculo.innerHTML = `O resultado da Soma é ${resultado}`
}


function subtracao(){
    let resultado = numero1.value - numero2.value
    resultadoCalculo.innerHTML = `O resultado da Subtração é ${resultado}`
}

function divisao(){
    let resultado = numero1.value / numero2.value
    resultadoCalculo.innerHTML = `O resultado da Divisão é ${resultado}`
}

function multiplicacao(){
    let resultado = numero1.value * numero2.value
    resultadoCalculo.innerHTML = `O resultado da Multiplicação é ${resultado}`
}
