let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto){
    let elemntoHTML = document.querySelector(elemento);
    elemntoHTML.innerHTML = texto;
return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    if (numeroDeUsuario===numeroSecreto){
        asignarTextoElemento('p',`Acertaste el numero,en ${intentos} ${(intentos == 1) ? 'vez' : 'veces'} `);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        //el usuario no acertó
        if(numeroDeUsuario > numeroSecreto){
         asignarTextoElemento('p', 'El numero secreto es menor')   
        }else{
            asignarTextoElemento('p','El numero secreto es mayor')
        }
        intentos++;
        limpiarCaja();

    }
    return;

}
function limpiarCaja(){
   let valorCaja = document.querySelector('#valorUsuario').value = '';
   
}

function generarNumeroSecreto() {
let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

console.log(numeroGenerado);
console.log(listaNumerosSorteados);
//Si ya sorteamos todos los numeros 
if (listaNumerosSorteados.length == numeroMaximo ){
    asignarTextoElemento('p','Ya se sortearon todos los numeros posibles' );
} else{
    //Si el numero generado está incluido en la lista

    if (listaNumerosSorteados.includes(numeroGenerado)){
    return generarNumeroSecreto();
    }else {
    listaNumerosSorteados.push(numeroGenerado);
    return numeroGenerado;
    }

}



    
}
function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p', `Indica un nuemro del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    //limpiar caja
    limpiarCaja();
    //indicar mensaje de inicio
    //generar el numero aleaorio 
    //deshabilitar el boton de nuevo juego 
    //reiniciar el numero de iintento
    condicionesIniciales();

    document.querySelector('#reiniciar').setAttribute('disabled','true');

}//no jaló la linea 55

condicionesIniciales();