/**  // esto:

usuario.nombre;

// es igual que...

var propiedad = "nombre";
usuario[propiedad];


letras = {}

if(letras[letras[i]]) {
 letras[letras[i]] ++;
}
*/  

vectorLetras = consultarTexto();

function consultarTexto() {
    var pideTexto = window.prompt("escribe un texto cualquiera");
    var formateotexto = pideTexto.toLowerCase().split("");
    console.log (formateotexto);
    vectorLetras = formateotexto;
    var miobjeto = new Object();

    for(var k=0; k < vectorLetras.length; k++){
        if (miobjeto[vectorLetras[k]]) {
            miobjeto[vectorLetras[k]] ++;
            console.log (miobjeto);
           
        }

    }

}
