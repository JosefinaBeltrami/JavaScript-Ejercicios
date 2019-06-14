function incluirarticulo () {
    /** Crear el article */
    var article = document.createElement("article");
    article.classList = "carrito";
    document.getElementById("carrito").appendChild(article);
    var total = document.createElement("article");
    total.classList = "total";
    document.getElementById("main__col_izq").appendChild(total);

    /* Incluir producto */
    
    var producto = document.createElement("h2"); 
    producto.classList ="carrito__producto"; 
    var nuevoproducto = document.getElementById("Producto_text").value; 
    producto.innerText = nuevoproducto; 
    document.getElementById("carrito").appendChild(producto); 
    
    /* Incluir Cantidad */
    var cantidad = document.createElement("h2");
    cantidad.classList ="carrito__cantidad";
    var nuevacantidad = Cantidad_text.value;
    cantidad.innerText = nuevacantidad;
    document.getElementById("carrito").appendChild(cantidad);
    
    /* Incluir Imagen */
    var Imagen = document.createElement("img");
    Imagen.classList ="carrito__imagen";
    var nuevaimagen = Imagen_text.value;
    Imagen.src = nuevaimagen;
    document.getElementById("carrito").appendChild(Imagen);
    
    /* Incluir Precio */
    var precio= document.createElement("p");
    precio.classList ="carrito__precio";
    var nuevoprecio = Precio_text.value;
    precio.innerText = nuevoprecio;
    document.getElementById("carrito").appendChild(precio);
    
    /** Convertir string a numeros */
    var Precio_en_numero = parseFloat (nuevoprecio);
    var cantidad_en_numero = parseInt (nuevacantidad);
    
    /** Carrito con totales y suma */
    var carrito = [];
    var total = 0;

    carrito.push()


    }