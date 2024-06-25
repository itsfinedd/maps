let map;
let ubi = {lat:-16.393547, lng:-71.549845};
let destiny;
const nombres = ["Cotum A", "Dolores San Martin ", "A15-Miraflores (c4union aqp)","Alto Selva A(C4 Unión AQP)","C2-4D(Cono Norte)","BJUANXXIII","C7-5 AQP Masivo Alto Libertad","C11 Cotum B","C - 3 de octubre","C7 AqpMasivo 7-09","B-Polanco","A-Mariano Melgar","Cayma Enace","B- 3 de octubre","La Perla S.R.L.T.D.A","15 de agosto","Uchumayo","Oriol - A"];
const rutas = [cotumA_ida, cotumA_vuelta, r1_dolores_ida, r1_dolores_vuelta, MirafloresAIda, MirafloresAVuelta, AltoSelvaAIda, AltoSelvaAVuelta, cononorte, cononorte, BjuanIda, BjuanVuelta, aqp7_05Ida, aqp7_05Vuelta, CotumBIda, CotumBVuelta, CoctubreIda, CoctubreVuelta, aqpmasivo7Ida, aqpmasivo7Vuelta, polanco, polanco, mariano, mariano, enaceIda, enaceVuelta, BoctubreIda, BoctubreVuelta, SMICoordenadas, SMVCoordenadas, CICoordenadas, CVCoordenadas,uchumayoIda, uchumayoIda, oriolIda, oriolVuelta];

const paraderos = [P_CotumAIda, P_CotumAVuelta, P_DoloresIda, P_DoloresVuelta, P_MirafloresIda, P_MirafloresVuelta, P_AltoSelvaIda, P_AltoSelvaVuelta, P_ConoIda, P_ConoVuelta, P_BJuanIda, P_BJuanVuelta, P_c75aqpIda, P_c75aqpVuelta, P_CotumBIda, P_CotumBVuelta, P_COctubreIDA, P_COctubreVuelta, P_c79aqpIda, P_c79aqpVuelta, P_PolancoIda, P_PolancoVuelta, P_MarianoIda, P_MarianoVuelta, P_CaymaIda, P_CaymaVuelta, P_Boctubre, P_Boctubre, P_PerlaIda, P_PerlaVuelta, P_AgostoIda, P_AgostoVuelta, P_UchumayoIda, P_UchumayoVuelta, P_OriolIda, P_OriolVuelta];

async function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    center:{lat: -16.402912894870457, lng: -71.51666345650146},
    mapTypeId: "roadmap",
  });

  const input = document.getElementById("llegada");
  const autocomplete = new google.maps.places.Autocomplete(input);
  autocomplete.addListener('place_changed', function() {
    const place = autocomplete.getPlace();
    if (!place.geometry) {
      console.log("Sin detalles para esta ubicación: '" + place.name + "'");
      return;
    }
    destiny = {
      lat: place.geometry.location.lat(),
      lng: place.geometry.location.lng()
    };
    showRoute(destiny);
  });
}

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    alert("La geolocalización no es compatible con este navegador.");
  }
}

function showPosition(position) {
  ubi = {
    lat: position.coords.latitude,
    lng: position.coords.longitude
  };
  map.setCenter(ubi);
  map.setZoom(17);
  const ubiMarker = new google.maps.Marker({
    position: ubi,
    map: map,
    icon: "./images/location.png"
  });
}
let markers = [];
let polylines = [];
function addMarkers(checkbox, positionsIda, positionsVuelta) {
  var markers1 = [];
  positionsIda.forEach(function(position) {
    var marker = new google.maps.Marker({
      position: position,
      map: checkbox.checked ? map : null,
      icon: "./images/paraderoida.png",
    });
    markers1.push(marker);
  });
  positionsVuelta.forEach(function(position) {
    var marker = new google.maps.Marker({
      position: position,
      map: checkbox.checked ? map : null,
      icon: "./images/paraderovuelta.png",
    });
    markers1.push(marker);
  });
  checkbox.addEventListener('change', function() {
    markers1.forEach(function(marker) {
      marker.setMap(checkbox.checked ? map : null);
    });
  });
}

const legendItems = {};

function createLegendItem(color, name) {
  if (!legendItems[name]) {
    const legendContainer = document.getElementById('leyenda-container');
    const item = document.createElement('div');
    item.className = 'legend-item';
    const colorBox = document.createElement('div');
    colorBox.className = 'legend-color';
    colorBox.style.backgroundColor = color;
    const text = document.createElement('span');
    text.textContent = name;
    item.appendChild(colorBox);
    item.appendChild(text);
    legendContainer.appendChild(item);
    legendItems[name] = item;
  }
}

function removeLegendItem(name) {
  if (legendItems[name]) {
    const legendContainer = document.getElementById('leyenda-container');
    legendContainer.removeChild(legendItems[name]);
    delete legendItems[name];
  }
}

function toggleRoute(checkbox, name, colorIda, routeIda, colorVuelta, routeVuelta = null) {
  const trazoIda = new google.maps.Polyline({
    path: routeIda,
    strokeColor: colorIda,
    strokeOpacity: 0.5,
    strokeWeight: 4,
  });
  const trazoVuelta = routeVuelta ? new google.maps.Polyline({
    path: routeVuelta,
    strokeColor: colorVuelta,
    strokeOpacity: 0.5,
    strokeWeight: 4,
  }) : null;

  checkbox.addEventListener('change', function() {
    if (checkbox.checked) {
      trazoIda.setMap(map);
      if (trazoVuelta) trazoVuelta.setMap(map);
      createLegendItem(colorIda, `${name} (ida)`);
      if (trazoVuelta) createLegendItem(colorVuelta, `${name} (vuelta)`);
    } else {
      trazoIda.setMap(null);
      if (trazoVuelta) trazoVuelta.setMap(null);
      removeLegendItem(`${name} (ida)`);
      if (trazoVuelta) removeLegendItem(`${name} (vuelta)`);
    }
  });
  
  if (checkbox.checked) {
    trazoIda.setMap(map);
    if (trazoVuelta) trazoVuelta.setMap(map);
    createLegendItem(colorIda, `${name} (ida)`);
    if (trazoVuelta) createLegendItem(colorVuelta, `${name} (vuelta)`);
  }
}

function desmarcarTodo() {
  var ele = document.getElementsByClassName('check');
  for (var i = 0; i < ele.length; i++) {
    if (ele[i].type == 'checkbox') {
      ele[i].checked = false;
      ele[i].dispatchEvent(new Event('change'));
    }
  }
}

function marcarTodo(){
  desmarcarTodo();
  var ele=document.getElementsByClassName('check');  
  for(var i=0; i<ele.length; i++){  
    if(ele[i].type=='checkbox'){ 
      ele[i].checked=true;
      ele[i].onclick();
    }
  }  
}


function minDistance(destination) {
  let minParadero = null;
  let minDistance = Number.MAX_VALUE;
  let minIndex = -1;
  let minUbi = null;
  let minUbiDis = Number.MAX_VALUE;

  paraderos.forEach(function(paradero, index) {
    paradero.forEach(function(position) {
      const distance = euclideanDistance(
        { lat: destination.lat, lng: destination.lng },
        { lat: position.lat, lng: position.lng }
      );

      if (distance < minDistance) {
        minDistance = distance;
        minParadero = position;
        minIndex = index;
      }
    });
  });

  paraderos[minIndex].forEach(function(position) {
    const dis = euclideanDistance(
      { lat: ubi.lat, lng: ubi.lng },
      { lat: position.lat, lng: position.lng }
    );
    if(dis < minUbiDis){
      minUbiDis = dis;
      minUbi = position;
    }
  });

  return { paradero: minParadero, index: minIndex, minUbi: minUbi };
}

function euclideanDistance(point1, point2) {
  const dx = point2.lat - point1.lat;
  const dy = point2.lng - point1.lng;
  return Math.sqrt(dx * dx + dy * dy);
}
function clearMap() {
  markers.forEach(marker => marker.setMap(null));
  markers = [];
  polylines.forEach(polyline => polyline.setMap(null));
  polylines = [];
  directions.forEach(directionsRenderer => {
    directionsRenderer.setMap(null);
  });
  directionsRenderers = [];
}
function showRoute(destination) {
  clearMap();
  const { paradero, index, minUbi } = minDistance(destination);
  var indiceNombres;
  if(index%2==0){
    indiceNombres = index/2;
  }else{
    indiceNombres = (index -1)/2;
  }
  if (paradero && index !== -1) {
    const trazo = new google.maps.Polyline({
      path: rutas[index],
      strokeColor: "#ff0000",
      strokeOpacity: 0.5,
      strokeWeight: 7,
    });
    const marker = new google.maps.Marker({
      position: paradero,
      map: map,
      icon: "./images/paradero.png"
    });
    const marker2 = new google.maps.Marker({
      position: destination,
      map: map,
      icon: "./images/destiny.png"
    });
    const ubiMarker = new google.maps.Marker({
    position: ubi,
    map: map,
    icon: "./images/location.png"
  });

    const marker3 = new google.maps.Marker({
      position: minUbi,
      map: map,
      icon: "./images/paraderocercano.png"
    });
    const contentString = '<div id="content">' +
      `<h2>Ruta</h2><h3>${nombres[indiceNombres]}</h3>` +
      '</div>';
    const infowindow = new google.maps.InfoWindow({
      content: contentString,
      ariaLabel: nombres[index], 
    });

    trazo.addListener('click', function(event) {
      infowindow.setPosition(event.latLng);
      infowindow.open(map);
    });
    polylines.push(trazo);
    markers.push(marker, marker2, ubiMarker, marker3);
    trazo.setMap(map);

    calcularRuta(ubi, minUbi);
    calcularRuta(paradero, destiny);
  }
}
let directions = [];
function calcularRuta(origen, destino) {
  const directionsService = new google.maps.DirectionsService();
  const directionsRenderer = new google.maps.DirectionsRenderer({
    map: map,
    suppressMarkers: true,
  });
  directions.push(directionsRenderer);
  const request = {
    origin: origen,
    destination: destino,
    travelMode: google.maps.TravelMode.DRIVING,
  };
  directionsService.route(request, function(result, status) {
    if (status == google.maps.DirectionsStatus.OK) {
      directionsRenderer.setDirections(result);
    } else {
      console.error("Error al calcular la ruta:", status);
    }
  });
}
window.initMap = initMap;
