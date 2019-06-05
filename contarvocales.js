
vectorLetras = consultarTexto();

function consultarTexto(){
    
    var a = e = i = o = u = 0;
    var pideTexto = window.prompt("escribe un texto cualquiera");
    var formateotexto = pideTexto.toLowerCase().split("");
    
    console.log (formateotexto);
    vectorLetras = formateotexto;
    
    for(var k=0;k < vectorLetras.length;k++){
    
        switch(vectorLetras[k]){
            case "a":
                a++;
                break;
            case "e":
                e++;
                break;
            case "i":
                i++;
                break;
            case "o":
                o++;
                break;
            case "u":
                u++;
                break;
        }
    }
    totalVocales = a+e+i+o+u;
    
    document.write("Texto original: <p>" + vectorLetras.join("") + "</p>");
    document.write("Cantidad de caracteres: <p>" + vectorLetras.length + "</p>");
    
    document.write("Hay " +  a + " vocales 'a'<br>");
    document.write("Hay " +  e + " vocales 'e'<br>");
    document.write("Hay " +  i + " vocales 'i'<br>");
    document.write("Hay " +  o + " vocales 'o'<br>");
    document.write("Hay " +  u + " vocales 'u'<br>");
    
    document.write("<br>");
    document.write("Total de vocales: " + totalVocales);
    document.write("<br>");  


    return formateotexto;
    
}        

  
        
        

        
