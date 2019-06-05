
var letras = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","X","Y","Z"];
var dni = prompt ("Ingrese su 8 digitos del DNI");

function calculaLetra (dni) {
    if (dni <0 && dni > 99999999) {
        alert("El DNI " + dni + "  proporcionado no es valido");
    }
    else {
        
        alert ("su DNI es " + dni);
        
        var letraCalculada = dni % 23;
        var resultado = letraCalculada;

    }
    return resultado;
}
var resultadoletra = calculaLetra (dni);
alert (resultadoletra);
