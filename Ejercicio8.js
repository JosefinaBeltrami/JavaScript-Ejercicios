var fraseUser = prompt("Escribe una frase ");

function Palindromo(fraseUser){
  
  fraseUser=fraseUser.toLowerCase().replace(/\s/g,"");

  fraserReverse=fraseUser.split("").reverse().toString();

  for (var i = 0; i < ((fraserReverse.length)-1); i++) {
    fraserReverse=fraserReverse.replace(",","");
  };

  if(fraseUser==fraserReverse){

    resultado="es un Palindromo";
  }
  else{

    resultado="no es un Palindromo";
  }

  document.write("Tu frase "+resultado);
}

Palindromo(fraseUser);