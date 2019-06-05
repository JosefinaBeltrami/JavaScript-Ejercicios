
var frases= ["Hola", "Frase Corta", "Frase normalita", "Frase muy muy larga"]
var longest = 0;
var longitud = "";

for (var i = 0; i < frases.length; i++) {
    console.log ("la longitud de  " + frases [i] + "  es  " + frases[i].length);
    if (frases[i].length > longest ) {
       longitud = frases[i];
       longest = frases[i].length;
    }

}
console.log("el string mas largo del array es   " + longitud + " con una longitud de  " + longest);