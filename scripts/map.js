function initMap() {
  const map = new google.maps.Map(document.getElementById("map"),
    {
    zoom: 12,
    center: { lat: -16.409047, lng: -71.537450 },
    mapTypeId: "terrain",
    });
  // Definiendo los puntos de la delimitacion.
  const arequipaCoords = [
    { lat: -16.413419, lng: -71.539593 },
    { lat: -16.398190, lng: -71.532024 },
    { lat: -16.396577, lng: -71.524374 },
    { lat: -16.403598, lng: -71.523615 },
    { lat: -16.407076, lng: -71.525077 },
    { lat: -16.410037, lng: -71.525662 },
    { lat: -16.412654, lng: -71.527405 },
    { lat: -16.412909, lng: -71.530572 },
    { lat: -16.418214, lng: -71.531754 },
    { lat: -16.421061, lng: -71.531314 },
    { lat: -16.425684, lng: -71.531883 },
    { lat: -16.429384, lng: -71.532540 },
    { lat: -16.428644, lng: -71.533255 },
    { lat: -16.425802, lng: -71.534186 },
    { lat: -16.424783, lng: -71.535801 },
    { lat: -16.423136, lng: -71.536873 },
    { lat: -16.419824, lng: -71.538211 },
    { lat: -16.414769, lng: -71.539937 },
    { lat: -16.413419, lng: -71.539593 },
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
