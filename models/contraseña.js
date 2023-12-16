function togglePassword() {
    const passwordInput = document.getElementById("password");
    const passwordIcon = document.querySelector(".toggle-password");

    // Cambia el tipo de entrada entre "password" y "text"
    passwordInput.type = passwordInput.type === "password" ? "text" : "password";

    // Cambia el icono según el tipo de entrada
    passwordIcon.style.backgroundImage = passwordInput.type === "password" ?
        'url("/Img/ojo.png")' : 'url("/Img/ojocerrado.png")'; /* Cambia la ruta según la ubicación de tus imágenes */
}