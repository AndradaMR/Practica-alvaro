console.log("Cargando lógica de frontend...");

// TICKET B: El junior dejó un bucle infinito
function procesarDatos() {
    let contador = 0;
    while (contador < 5) {
        console.log("Procesando bloque: " + contador);
        // Error: Falta el contador++;
    }
}

// Para evitar que el navegador se cuelgue al abrirlo la primera vez, 
// la llamada está comentada. El alumno debe arreglarla y descomentarla.
// procesarDatos();