//Función para obtener la ubicación del usuario
function ObtenerUbicacion() {

    console.log("La función ObtenerUbicacion() se ha llamado correctamente.");
    //Verificar si el navegador soporta la geolocalización
    if ("geolocation" in navigator) {
        //Solicitar permiso al usuario para acceder a su ubicación 
        navigator.geolocation.getCurrentPosition(function(position) {
            //Acceso concedido, obtener coordenadas
            var latitud = position.coords.latitude;
            var longitud = position.coords.longitude;
            alert("Tu ubicación es: Latitud" + latitud + ", Longitud" + longitud);
            // Aquí podrías utilizar las coordenadas para mostrar los gimnasios cercanos
        });
    } else {
        //El navegador no soporta la geolocalización 
        alert("Lo siento, tu navegador no soporta geolocalización.");
    }

    //Agregar un evento de clic al botón para solicitar la ubicación
    document.getElementById("ubicacionBtn").addEventListener("click", function() {
        //Perdir permiso para acceder a la ubicación 
        navigator.permissions.query({name:'geolocation'}).then(function(permissionStatus){
            if(permissionStatus.state ==='granted') {
                //Permiso ya concedido, obtener ubicación 
                ObtenerUbicacion();
            } else if (permissionStatus.state === 'prompt') {
                //El usuario aún no ha decidido, mostrar mensaje de confirmación
                var permitirUbicacion = confirm("¿Permitir acceso a tu ubicación?");
                if (permitirUbicacion) {
                    ObtenerUbicacion();
                } else {
                    alert("Lo siento, sin permiso no podemos mostrarte los gimnasios de tu ciudad.");
                }
            } else if (permissionStatus.state === 'denied') {
                //Permiso denegado
                alert("Lo siento, sin permiso no podemos mostrarte los gimnasios de tu ciudad.");
            }
        });
    });
}
