function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    center: { lat: -16.40588, lng: -71.53165 },
    mapTypeId: "roadmap",
  });

  // Encoded polyline: f`ecBzjjsLx@lJbGe@dAxNaGnBmBfCmLhSyNnWoOhWc\`m@iU~_@te@dm@tRpWaFrEgJmM

  const CICoordenadas= [
    { lat: -16.41492, lng: -71.49246},
    { lat: -16.41521, lng: -71.49429},
    { lat: -16.41651, lng: -71.49410},
    { lat: -16.41686, lng: -71.49663},
    { lat: -16.41557, lng: -71.49719},
    { lat: -16.41502, lng: -71.49787},
    { lat: -16.41287, lng: -71.50112},
    { lat: -16.41034, lng: -71.50504},
    { lat: -16.40770, lng: -71.50893},
    { lat: -16.40304, lng: -71.51630},
    { lat: -16.39947, lng: -71.52158},
    { lat: -16.40566, lng: -71.52897},
    { lat: -16.40881, lng: -71.53290},
    { lat: -16.40768, lng: -71.53396},
    { lat: -16.40588, lng: -71.53165},
  ];
  const CIRuta = new google.maps.Polyline({
    path: CICoordenadas,
    strokeColor: "#FF0000",
    strokeOpacity: 0.7,
    strokeWeight: 5,
  });

  // Encoded polyline: rgccBv_rsLvCuBfAqAkO_SjL}LvB~D^bCr@z@lCsAmFsLgQ_^f@WwAmCkBkHg@sCtMiE{D{HjcAagBlG}BcA{N}Ff@y@{I
  const CVCoordenadas= [
    { lat: -16.40586, lng: -71.53164},
    { lat: -16.40662, lng: -71.53105},
    { lat: -16.40698, lng: -71.53064},
    { lat: -16.40436, lng: -71.52744},
    { lat: -16.40650, lng: -71.52521},
    { lat: -16.40710, lng: -71.52617},
    { lat: -16.40726, lng: -71.52683},
    { lat: -16.40752, lng: -71.52713},
    { lat: -16.40823, lng: -71.52671},
    { lat: -16.40704, lng: -71.52453},
    { lat: -16.40412, lng: -71.51957},
    { lat: -16.40432, lng: -71.51945},
    { lat: -16.40388, lng: -71.51874},
    { lat: -16.40334, lng: -71.51724},
    { lat: -16.40314, lng: -71.51650},
    { lat: -16.40549, lng: -71.51549},
    { lat: -16.40455, lng: -71.51391},
    { lat: -16.41549, lng: -71.49726},
    { lat: -16.41684, lng: -71.49663},
    { lat: -16.41650, lng: -71.49409},
    { lat: -16.41523, lng: -71.49429},
    { lat: -16.41494, lng: -71.49255},
  ];
  const CVRuta = new google.maps.Polyline({
    path: CVCoordenadas,
    strokeColor: "#0000FF",
    strokeOpacity: 0.7,
    strokeWeight: 5,
  });

  const SMICoordenadas = [
    { lat: -16.386832, lng: -71.542114 }, // Parada en Cayma
    { lat: -16.394563, lng: -71.543032 }, // Parada intermedia
    { lat: -16.398527, lng: -71.544397 }, // Parada intermedia
    { lat: -16.402341, lng: -71.542971 }, // Parada intermedia
    { lat: -16.407585, lng: -71.541123 }, // Parada intermedia
    { lat: -16.410487, lng: -71.541193 }, // Parada intermedia
    { lat: -16.413258, lng: -71.541729 }, // Parada en San Miguel
    { lat: -16.416424, lng: -71.542336 }, // Parada intermedia
    { lat: -16.418891, lng: -71.542961 }, // Parada intermedia
    { lat: -16.423235, lng: -71.544436 }, // Parada intermedia
    { lat: -16.428443, lng: -71.544560 }, // Parada intermedia
    { lat: -16.432284, lng: -71.544535 }, // Parada final
  ]

  const SMIRuta = new google.maps.Polyline({
    path: SMICoordenadas,
    strokeColor: "#7D2181",
    strokeOpacity: 0.7,
    strokeWeight: 5,
  });

  CIRuta.setMap(map);
  CVRuta.setMap(map);
  SMIRuta.setMap(map);
}

window.initMap = initMap;
