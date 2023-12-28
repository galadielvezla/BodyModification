/* let latitud= -34.603722;
let longitud= -58.381592; */

// Función para recibir y manejar el número enviado desde index.html

function enviarCoord(latitud, longitud) {
    var coordenadas = { lat: latitud, lng: longitud };

// Función para inicializar el mapa
/* function initMap() {
    // Coordenadas donde se centrará el mapa
    var coordenadas = { lat: latitud, lng: longitud }; // Latitud y longitud de Buenos Aires, Argentina (ejemplo)
     */
    // Crear un nuevo mapa dentro del contenedor con ID 'map'
    var map = new google.maps.Map(document.getElementById('map'), {
        center: coordenadas, // Centrar el mapa en las coordenadas especificadas
        zoom: 12 // Nivel de zoom del mapa
    });

    // Opcional: Puedes agregar marcadores, polilíneas, etc. al mapa aquí.
    // Ejemplo de marcador:
    var marker = new google.maps.Marker({
        position: coordenadas,
        map: map,
        title: 'Ejemplo de marcador'
    });
}


// Llama a la función para cargar la API de Google Maps al cargar la página
window.onload = loadGoogleMaps;

function expandirImagen() {
    var imagen = document.getElementById('miImagen');
    if (imagen.style.width === '200px') {
      imagen.style.width = '400px'; // Cambiar el tamaño al hacer clic
    } else {
      imagen.style.width = '200px'; // Restaurar el tamaño original al hacer clic nuevamente
    }
  }
