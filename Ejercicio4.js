
var array1 = ["Richie", "Joanie", "Greg", "Marcia", "Boddy"];
var array2 = ["Blank", "Zangief", "Chun Li","Guile"];
var array3 = ["Red", "Blue", "Green"];

var resultados = [];

var longest = 0;
var longitud = "";
var longest_2 = 0;
var longitud_2 = "";
var longest_3 = 0;
var longitud_3 = "";

    for (var i = 0; i < array1.length; i++) {
        console.log ("la longitud de  " + array1 [i] + "  es  " + array1[i].length);
        if (array1[i].length > longest ) {
           longitud = array1[i];
           longest = array1[i].length;
        }
    } 
    for (var i = 0; i < array2.length; i++) {
        console.log ("la longitud de  " + array2 [i] + "  es  " + array2[i].length);
        if (array2[i].length > longest_2 ) {
          longitud_2 = array2[i];
          longest_2 = array2[i].length;
        }
    } 
    for (var i = 0; i < array3.length; i++) {
        console.log ("la longitud de  " + array3 [i] + "  es  " + array3[i].length);
        if (array3[i].length > longest_3 ) {
           longitud_3 = array3[i];
           longest_3 = array3[i].length;
        }
    } 

var resultados_text =[];

resultados_text.push (longitud);
resultados_text.push (longitud_2);
resultados_text.push (longitud_3);
resultados.push (longest);
resultados.push (longest_2);
resultados.push (longest_3);

console.log (resultados);
console.log (resultados_text);

/** con el resultado deberia hacer un promedio para obtener el string medio de longitud. 
 * var avg = sum / resultados.length; */
 



