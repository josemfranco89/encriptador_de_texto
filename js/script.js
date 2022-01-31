
/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/

"use strict";


var regla1 = "e";
var regla2 = "i";
var regla3 = "a";
var regla4 = "o";
var regla5 = "u";
var cambio1 = "enter";
var cambio2 = "imes";
var cambio3 = "ai";
var cambio4 = "ober";
var cambio5 = "ufat";

function codificar (x, y, i) {   
    var inputCod = i.replaceAll(x, y);
    return inputCod;
}

function trasladar (a) {  
    var input2 = document.querySelector("#msg");
    input2.value=a;   
    
}

function copiar() {
    var content = document.getElementById("msg");
    content.select();
    document.execCommand('copy');
}

var button = document.querySelector("#btn-encriptar");
button.addEventListener("click", (e) => {
    e.preventDefault();
    var input = document.querySelector("#input-texto").value;
    var codificado = codificar(regla1,cambio1, input);
    codificado = codificar(regla2,cambio2, codificado);
    codificado = codificar(regla3,cambio3, codificado);
    codificado = codificar(regla4,cambio4, codificado);
    codificado = codificar(regla5,cambio5, codificado);
    trasladar(codificado);
});

var button2 = document.querySelector("#btn-desencriptar");
button2.addEventListener("click", (e) => {
    e.preventDefault();
    var input = document.querySelector("#input-texto").value;
    var codificado = codificar(cambio1,regla1, input);
    codificado = codificar(cambio2,regla2, codificado);
    codificado = codificar(cambio3,regla3, codificado);
    codificado = codificar(cambio4,regla4, codificado);
    codificado = codificar(cambio5,regla5, codificado);
    trasladar(codificado);
});

var button3 = document.querySelector("#btn-copy");
button3.addEventListener("click", (e) => {
    e.preventDefault();
    var textoCopiado = copiar();
});