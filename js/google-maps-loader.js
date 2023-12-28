
// Carga la API de Google Maps
function loadGoogleMaps() {
    const script = document.createElement('script');
    script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBFJDodfM-scCqppVqWvC-hlHPo5WafMNI&callback=initMap';
    script.defer = true;
    script.async = true;
    document.head.appendChild(script);
}
