document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    console.log("Intentando iniciar sesión...");

    // Simplemente redireccionamos al usuario a la página principal
    alert("¡Felicidades! Has iniciado sesión.");
    console.log("Redirigiendo a la página principal...");
    window.location.href = "Primerapag.html";
});
