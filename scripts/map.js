function initMap() {
  const map = new google.maps.Map(document.getElementById("map"),
    {
    zoom: 12,
    center: { lat: -16.409047, lng: -71.537450 },
    mapTypeId: "roadmap",
    });
  // Definiendo los puntos de la delimitacion.
  const arequipaCoords = [
    { lat: -16.298289, lng:-71.563641},
    { lat: -16.311915, lng:-71.592464},
    { lat: -16.372130, lng:-71.631841},
    { lat: -16.425300, lng:-71.587131},
    { lat: -16.469385, lng:-71.546208},
    { lat: -16.418423, lng:-71.462035},
    { lat: -16.401039, lng:-71.474581},
    { lat: -16.357439, lng:-71.501625},
  ];
  // Construct the polygon.
  const arequipaPolygon = new google.maps.Polygon({
    paths: arequipaCoords,
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.35,
    });

  arequipaPolygon.setMap(map);
  // Modificación para colocar la dirección web de los datos de la ruta del autobús
  const infoWindow = new google.maps.InfoWindow({
    content: "<ejemplodireccionweb'>Enlace a los datos de la ruta del autobús</a>"
    });
  
  const marker = new google.maps.Marker({
    position: { lat: -16.398140, lng: -71.536535 },
    map: map,
    title: "Arequipa"
    });

    marker.addListener("click", () => {
    infoWindow.open(map, marker);
    });

  // Coordenadas de las paradas de autobus para la ruta de Cayma (usando la foto del bus del otro archivo como ejemplo)
  const caymaSanMiguelCoords = [
    { lat: -16.386832, lng: -71.542114 }, // Parada en Cayma
    { lat: -16.394563, lng: -71.543032 }, // Parada intermedia
    { lat: -16.398527, lng: -71.544397 }, // Parada intermedia
    { lat: -16.402341, lng: -71.542971 }, // Parada intermedia
    { lat: -16.407585, lng: -71.541123 }, // Parada intermedia
    { lat: -16.410487, lng: -71.541193 }, // Parada intermedia
    { lat: -16.413258, lng: -71.541729 }, // Parada en San Miguel
    ];

    // Agregar marcadores para las paradas de autobús
    caymaSanMiguelCoords.forEach((coords, index) => {
      new google.maps.Marker({
      position: coords,
      map: map,
      label: (index + 1).toString() // Etiquetas numéricas para las paradas
      });
    });
}

window.initMap = initMap;

