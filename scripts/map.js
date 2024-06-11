let map;
let ubi;
let destiny;
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

function addMarkers(checkbox, positionsIda, positionsVuelta) {
  var markers = [];
  positionsIda.forEach(function(position) {
    var marker = new google.maps.Marker({
      position: position,
      map: checkbox.checked ? map : null,
      icon: "./images/paraderoida.png"
    });
    markers.push(marker);
  });
  positionsVuelta.forEach(function(position) {
    var marker = new google.maps.Marker({
      position: position,
      map: checkbox.checked ? map : null,
      icon: "./images/paraderovuelta.png"
    });
    markers.push(marker);
  });
  checkbox.addEventListener('change', function() {
    markers.forEach(function(marker) {
      marker.setMap(checkbox.checked ? map : null);
    });
  });
}

function addMarker(checkbox, positions) {
  var markers = [];
  positions.forEach(function(position) {
    var marker = new google.maps.Marker({
      position: position,
      map: checkbox.checked ? map : null,
      icon: "./images/paraderoida.png"
    });

    markers.push(marker);
  });
  checkbox.addEventListener('change', function() {
    markers.forEach(function(marker) {
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
  let closestParadero = null;
  let closestDistance = Number.MAX_VALUE;
  let closestIndex = -1;
  
  paraderos.forEach(function(paradero, index) {
    paradero.forEach(function(position) {
      const distance = google.maps.geometry.spherical.computeDistanceBetween(
        new google.maps.LatLng(destination.lat, destination.lng),
        new google.maps.LatLng(position.lat, position.lng)
      );

      if (distance < closestDistance) {
        closestDistance = distance;
        closestParadero = position;
        closestIndex = index;
      }
    });
  });
  return { paradero: closestParadero, index: closestIndex };
}

function showRoute(destination) {
  const { paradero, index } = minDistance(destination);
  if (paradero && index !== -1) {
    const trazo = new google.maps.Polyline({
      path: rutas[index],
      strokeColor: "#990099",
      strokeOpacity: 0.5,
      strokeWeight: 4,
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
    map.setCenter(paradero);
    trazo.setMap(map);
  }
}


window.initMap = initMap;
