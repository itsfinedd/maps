function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    center: { lat: -16.40588, lng: -71.53165 },
    mapTypeId: "roadmap",
  });

  // Encoded polyline: f`ecBzjjsLx@lJbGe@dAxNaGnBmBfCmLhSyNnWoOhWc\`m@iU~_@te@dm@tRpWaFrEgJmM
//ruta 15 de agosto ida
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
  ////ruta 15 de agosto vuelta
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
 ////ruta la perla ida
  const SMICoordenadas = [
    { lat: -16.416442, lng: -71.481015 }, // Paradero inicio Ida Av Jesus
    { lat: -16.414558, lng: -71.482298 }, // Av LOs Incas
    { lat: -16.415517, lng: -71.489280 }, // Av REvolucion
    { lat: -16.415873, lng: -71.488978 }, // Av revolucion
    { lat: -16.421898, lng: -71.498287 }, // Av Jesus
    { lat: -16.411897, lng: -71.512653 }, // Kenedy y Av jesus
    { lat: -16.405472, lng: -71.515430 }, // Jesus con lima
    { lat: -16.404523, lng: -71.513894 }, // lima y mariscal
    { lat: -16.399505, lng: -71.521551 }, // Independicia con mariscal
    { lat: -16.411114, lng: -71.535722 }, // idependenci con alcides carrion
    { lat: -16.423494, lng: -71.532151 }, // LAcides carrion con Huracacan
    { lat: -16.425256, lng: -71.533372 }, // carrion con avelino
   
    { lat: -16.422519, lng: -71.544020 }, // ruta termino de ruta ida

  ];

  const SMIRuta = new google.maps.Polyline({
    path: SMICoordenadas,
    strokeColor: "#7D2181",
    strokeOpacity: 0.7,
    strokeWeight: 5,
  });
////ruta la perla vuelta
 const SMVCoordenadas = [
    { lat: -16.422261, lng: -71.544020 }, // inicio Vuelta incas
    { lat: -16.417168, lng: -71.532936 }, // incas con alcides
    { lat: -16.408703, lng: -71.537064 }, //  alcides con jorge chavez
    { lat: -16.398090, lng: -71.523896 }, //  goyeneche con Muñoz
    { lat: -16.402931, lng: -71.516571 }, //  Ovalo MAriscal Castilla
    { lat: -16.411828, lng: -71.512655 }, //  Castilla con Kenedy
    { lat: -16.421610, lng: -71.498737 }, //  banden
    { lat: -16.421610, lng: -71.498737 }, //  banden
    { lat: -16.415875, lng: -71.488988 }, //  revolucion
    { lat: -16.416433, lng: -71.481028 }, //  paradero inicio
  ];

  const SMVRuta = new google.maps.Polyline({
    path: SMVCoordenadas,
    strokeColor: "#ff8000",
    strokeOpacity: 0.7,
    strokeWeight: 5,
  });

  
  CIRuta.setMap(map);
  CVRuta.setMap(map);
  SMIRuta.setMap(map);
  SMVRuta.setMap(map);
}

window.initMap = initMap;
