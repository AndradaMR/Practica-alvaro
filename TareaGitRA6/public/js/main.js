console.log("Cargando lógica de frontend...");

// TICKET B: Función corregida
function procesarDatos() {
    let contador = 0;
    while (contador < 5) {
        console.log("Procesando bloque: " + contador);
        contador++; // Incrementamos el contador para salir del bucle
    }
}

// Llamada descomentada ahora que la función está corregida
procesarDatos();