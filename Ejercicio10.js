          
function calcularEdad()
{
    var fecha=document.getElementById("user_date").value;
    var values=fecha.split("-");
    var dia = values[2];
    var mes = values[1];
    var ano = values[0];

    // cogemos los valores actuales
    var fecha_hoy = new Date();
    var ahora_ano = fecha_hoy.getYear();
    var ahora_mes = fecha_hoy.getMonth();
    var ahora_dia = fecha_hoy.getDate();

    // realizamos el calculo
    var edad = (ahora_ano + 1900) - ano;
    if ( ahora_mes < (mes - 1))
        {
            edad--;
        }
    if (((mes - 1) == ahora_mes) && (ahora_dia < dia))
        {
            edad--;
        }
    if (edad > 1900)
        {
            edad -= 1900;
        }

    document.getElementById("result").innerHTML="Tienes "+edad+" años";
}


