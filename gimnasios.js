// Función para obtener la ubicación del usuario
function ObtenerUbicacion() {
    // Verificar si el navegador soporta la geolocalización
    if ("geolocation" in navigator) {
        // Solicitar permiso al usuario para acceder a su ubicación 
        navigator.geolocation.getCurrentPosition(function(position) {
            // Acceso concedido, obtener coordenadas
            var latitud = position.coords.latitude;
            var longitud = position.coords.longitude;
            alert("Tu ubicación es: Latitud " + latitud + ", Longitud " + longitud+"Sevilla");

            // Aquí podrías utilizar las coordenadas para mostrar los gimnasios cercanos
        }, function(error) {
            if (error.code === error.PERMISSION_DENIED) {
                alert("Lo siento, sin permiso no podemos mostrarte los gimnasios de tu ciudad.");
            }
        });
    } else {
        // El navegador no soporta la geolocalización 
        alert("Lo siento, tu navegador no soporta geolocalización.");
    }
}

// Función para solicitar permiso para acceder a la ubicación
function SolicitarPermisoUbicacion() {
    var permitirUbicacion = confirm("Hola, para facilitarte los gimnasios necesito tu ubicación. ¿Me das permiso para ver tu ubicación?");
    if (permitirUbicacion) {
        ObtenerUbicacion();
    } else {
        alert("Lo siento, sin permiso no podemos mostrarte los gimnasios de tu ciudad.");
    }
}

// Ejecutar al cargar la página
window.onload = function() {
    SolicitarPermisoUbicacion();
}

