let numeroSecreto = generarNumeroSecreto();
let intentos = 0;

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario === numeroSecreto) {
        console.log('Acertaste el número!');
    } 
    return;
}


function generarNumeroSecreto() {
    return Math.floor(Math.random()*10)+1;

}

asignarTextoElemento('h1','Juego del número secreto!');
asignarTextoElemento('p',`Indica un número del 1 al 10`);

function ejerciciosRepaso() {
    ejercicio_1();
    ejercicio_2("Carlos");
    console.log(ejercicio_3(3));
    console.log(ejercicio_4(4, 5, 8));
    console.log(ejercicio_5(7,3));
    console.log(ejercicio_6(5));
}

function ejercicio_1() {
    console.log("Hola mundo");
    return;
}

function ejercicio_2(nombre) {
    console.log(`Hola, ${nombre}`);    
    return;
}

function ejercicio_3(numero) {
    return numero*2;
}

function ejercicio_4(numero1, numero2, numero3) {
    return ((numero1+numero2+numero3)/3);
}

function ejercicio_5(numero1, numero2) {
    if (numero1>numero2){
        return numero1;
    }else{
        return numero2;
    }

}

function ejercicio_6(numero) {
    return numero*numero;
    }