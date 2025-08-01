let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
let cantidadIntentos = 4;

condicionesIniciales();
//console.log(numeroSecreto);

function verificarIntento () {
let numeroUsuario = parseInt(document.getElementById('numeroUsuario').value);

if(numeroSecreto===numeroUsuario) {
    asignarTextoElemento('p',`acertaste! en ${intentos} ${intentos === 1 ? "intento" : "intentos"}`);
    document.getElementById('reiniciar').removeAttribute('disabled');
}else {
    if (numeroSecreto > numeroUsuario) {
        asignarTextoElemento('p',`Numero secreto es mayor a ${numeroUsuario}`);
    } else {
        asignarTextoElemento('p',`Numero secreto es menor a ${numeroUsuario}`);
    }
    intentos++;
    //si ya alcanzamos la cantidad maxima de intentos detener el juego
/*if (intentos === cantidadIntentos) {
        asignarTextoElemento('p',`Ya alcanzo la cantidad maxima de intentos : ${cantidadIntentos}`);
        let respuesta = prompt('Deseas reiniicar el juego. digita S = SI o N = NO '); 
        if ( respuesta = 'S') {

            reiniciarJuego();
        }
    } else {
   limpiarCaja();
    }*/
   limpiarCaja();
}
return ;
}
function limpiarCaja() {
    document.getElementById('numeroUsuario').value = '';
}
function asignarTextoElemento (elemento,texto) 
{
let titulo = document.querySelector(elemento);
titulo.innerHTML = texto;
return;
}
/*asignarTextoElemento('h1','Juego del numero secreto.');
asignarTextoElemento('p',`Selecciona un número entre el 1 y el ${numeroMaximo}:`);*/
function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del numero secreto.');
    asignarTextoElemento('p',`Selecciona un número entre el 1 y el ${numeroMaximo}:`);
    intentos = 1;
    numeroSecreto = generarNumeroSecreto();

}
function generarNumeroSecreto() {
   let numeroGenerado =  Math.floor(Math.random()*numeroMaximo) + 1;
   console.log(numeroGenerado);
   console.log(listaNumerosSorteados);
   // ya se sortearon todos los numeros posibles.
   if (listaNumerosSorteados.length == numeroMaximo) {
      asignarTextoElemento('p','Ya se sortearon todos los numeros posibles.');
      return;
    } else {
    // si el numero generado yA esta en la lista
    if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
    } else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;

    }
   }
}
function reiniciarJuego (){
 limpiarCaja();
 condicionesIniciales();
 console.log(numeroSecreto);
 document.getElementById('numeroUsuario').focus();
 document.getElementById('reiniciar').setAttribute('disabled',true);

}