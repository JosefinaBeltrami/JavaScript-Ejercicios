var fraseUser = prompt("Escribe una frase ");

function stringInverso(fraseUser){
  
  fraserReverse=fraseUser.split("").reverse().toString();

  for (var i = 0; i < ((fraserReverse.length)-1); i++) {
    fraserReverse=fraserReverse.replace(",","");
  };

  document.write("Tu frase al reves es:   "+ fraserReverse);
  document.write("<br>");
}

stringInverso(fraseUser);

function ponerTodasLasLetrasMayusculas (fraseUser) {
    frasemayuscula=fraseUser.toUpperCase();
    document.write("Tu frase en Mayuscula es:   "+ frasemayuscula);
    document.write("<br>");
}

ponerTodasLasLetrasMayusculas (fraseUser);

function eliminarEspacios (fraseUser) {
var cadena = '';
    var arrayString = fraseUser.split(' ');
    for (var i = 0; i < arrayString.length; i++) {
        if (arrayString[i] != "") {
            cadena += arrayString[i];
        }
    }
    document.write("Tu frase en Mayuscula es:   "+ cadena);
    document.write("<br>");
}
eliminarEspacios (fraseUser);

