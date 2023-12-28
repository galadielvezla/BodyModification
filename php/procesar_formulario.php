<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST["nombre"];
    $email = $_POST["email"];
    $mensaje = $_POST["mensaje"];
    
    // Correo de destino (cambiar al correo al que quieras enviar)
    $destino = "cardpp94@gmail.com";
    
    // Asunto del correo
    $asunto = "Nuevo mensaje desde el formulario de contacto";

    // Contenido del correo
    $contenido = "Nombre: $nombre\n";
    $contenido .= "Correo electrónico: $email\n";
    $contenido .= "Mensaje:\n$mensaje";

    // Enviar correo electrónico
    mail($destino, $asunto, $contenido);
    
    // Redireccionar a una página de confirmación
    header("Location: confirmacion.html");
}
?>
