const botonesDiv = document.getElementById('botones');
const resultadoDiv =document.getElementById('resultado');

resultadoDiv.innerHTML = "empezamos funciones"
botonesDiv.innerHTML= `
<button class="btn btn-info" onclick="suma()">suma</button>
<button class="btn btn-info" onclick="division()">division</button>
<button class="btn btn-info" onclick="letraRepetida()">letraRepetida</button>
`;


function suma(){
    let numero_1 =parseInt(prompt("ingrese numero"));
    let numero_2 =parseInt(prompt("ingrese numero"));
    let resultado = numero_1+numero_2;
    resultadoDiv.innerHTML = `Suma: ${resultado}`;
    
}


function division(){
    let numero_1 =parseInt(prompt("ingrese numero"));
    let numero_2 =parseInt(prompt("ingrese numero"));
    
    if ( numero_1 > numero_2){
        let resultado = numero_1/numero_2;
        resultadoDiv.innerHTML = `division: ${resultado}`;
    }
    else{
        let resultado2 = numero_2/numero_1;
        resultadoDiv.innerHTML = `resultado: ${resultado2}`;
    }
}

function letraRepetida {

let letraRepetida = 
    let letraRepetida = document.getElementsByClassName("escriba una palabra");



}