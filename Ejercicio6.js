function dividirCadena(cadenaADividir,separador) {
    var arrayDeCadenas = cadenaADividir.split(separador);
    document.write('<p>La cadena original es: "' + cadenaADividir + '"');
    document.write('<br>El separador es: "' + separador + '"');
    document.write("<br>El array tiene " + arrayDeCadenas.length + " elementos: ");
    document.write(arrayDeCadenas);
    
    document.write("<br>");
 
    for (var i=0; i < arrayDeCadenas.length; i++) {
       document.write(arrayDeCadenas[i]);
       document.write("<br>");
       var suma = suma + arrayDeCadenas[i];

    }
    
    document.write(suma);
    document.write("<br>");

 }

 
 var cadenanumeros = prompt("Ingrese los numeros a dividir, separados por dos puntos", "80:70:90:100");
  
 var dospunto = prompt ("ingresar el caracter que va a eliminar: ")
 
 dividirCadena(cadenanumeros, dospunto);
 