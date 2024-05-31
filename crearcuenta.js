document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();
    // Mostrar mensaje de éxito
    document.getElementById("success").style.display = "block";
    // Limpiar el formulario después de enviarlo
    document.getElementById("signupForm").reset();
    alert("¡Felicidades! Tu cuenta se ha creado.");
    console.log("Redirigiendo a la página principal...");
    window.location.href = "Primerapag.html";
});

