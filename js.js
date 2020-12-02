var mymap = L.map('mapid').setView([48.151402, 17.073999], 16);
L.tileLayer('https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=tyzjSzbnjhGMYAHGbonU', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
        '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1
}).addTo(mymap);


var popup = L.popup();

/*
function onMapClick(e) {
    L.marker(e.latlng).addTo(mymap);
    popup
        .setLatLng(e.latlng)
        .setContent("ide kattintottal buzzi " + e.latlng.toString().bold())
        .openOn(mymap);
}
mymap.on('click', onMapClick);

*/


var theMarker = {};

mymap.on('click', function (e) {
    lat = e.latlng.lat;
    lon = e.latlng.lng;

    if (theMarker !== undefined) {
        mymap.removeLayer(theMarker);

    }
    ;

    //Add a marker to show where you clicked.

    theMarker = L.marker([lat, lon]).addTo(mymap);

    popup
        .setLatLng(e.latlng)
        .setContent("Marker current location " + e.latlng.toString().bold())
        .openOn(mymap);
});


var myGeoJSON = {
    "type": "FeatureCollection",
    "features": [{
        "type": "Feature",
        "id": "b19a264b-d0ac-4894-94fc-9103383188bb",
        "geometry": {
            "type": "Polygon",
            "coordinates": [[[17.07254817, 48.15196799], [17.07255341, 48.15181587], [17.07386907, 48.15182986], [17.07386645, 48.15197323], [17.07254817, 48.15196799]]]
        },
        "properties":
            {
                "popupContent":
                    "Block A <br> PGO - Pedagogické oddelenie<br>IKAL - Inštitút komunikácie a aplikovanej lingvistiky<br>ÚJFI - Ústav jadrového a fyzikálneho inžinierstva",
                
                }


        ,
    }, {
        "type": "Feature",
        "id": "32740f9c-d80d-4457-927e-e2c0a5e459a4",
        "geometry": {
            "type": "Polygon",
            "coordinates": [[[17.07301206, 48.15246106], [17.07299633, 48.15232818], [17.0743513, 48.15232643], [17.07435392, 48.15247156], [17.07301206, 48.15246106]]]
        },
        "properties":
            {
                "popupContent":
                    "Block B <br>ÚE - Ústav elektrotechniky<br>ÚMIKT - Ústav multimediálnych informačných a komunikačných technológií",

            }
        ,
    }, {
        "type": "Feature",
        "id": "02c49ddf-5dd1-452e-9008-50dd8eca7b5c",
        "geometry": {
            "type": "Polygon",
            "coordinates": [[[17.07386383, 48.15296987], [17.07388217, 48.15283349], [17.07256914, 48.15284923], [17.07255865, 48.15297512], [17.07386383, 48.15296987]]]
        },
        "properties":
            {
                "popupContent":
                    "Block C <br>ÚEAE - Ústav elektroenergetiky a aplikovanej elektrotechniky<br>ÚIM - Ústav informatiky a matematiky",

            }
        ,
    }, {
        "type": "Feature",
        "id": "064babf8-f2f9-4d41-a9ee-e236036d1d8c",
        "geometry": {
            "type": "Polygon",
            "coordinates": [[[17.07322172, 48.15348217], [17.07319814, 48.15334055], [17.07438013, 48.15333705], [17.07438013, 48.15348917], [17.07322172, 48.15348217]]]
        },
        "properties":
            {
                "popupContent":
                    "Block D <br>ÚAMT - Ústav automobilovej mechatroniky<br>ÚRK - Ústav robotiky a kybernetiky",

            }
        ,
    }, {
        "type": "Feature",
        "id": "4f093284-b6e8-49da-aae3-7f2849e3e36e",
        "geometry": {
            "type": "Polygon",
            "coordinates": [[[17.07387693, 48.15397523], [17.07390838, 48.1538406], [17.07257176, 48.15385109], [17.07257176, 48.15398747], [17.07387693, 48.15397523]]]
        },
        "properties":
            {
                "popupContent":
                    "Block E <br>ÚEF - Ústav elektroniky a fotoniky",

            }
        ,

    }, {
        "type": "Feature",
        "id": "d56063de-ac40-4e53-8ddc-123067575064",
        "geometry": {
            "type": "Polygon",
            "coordinates": [[[17.07254368, 48.15443583], [17.07281089, 48.15443803], [17.07279745, 48.15297416], [17.07255865, 48.15297512], [17.07254368, 48.15443583]]]
        },
        "properties":
            {
                "popupContent":
                    "Telocvicna <br>Plaváreň, posilňovňa, veľká-malá telocvična",

            }


    }]
}

var busicon = L.icon({
    iconUrl: 'bus.png',
    iconSize: [32, 37],
    iconAnchor: [16, 37],
    popupAnchor: [0, -28]
});


var bus = {
    "type": "FeatureCollection",
    "features": [{
        "type": "Feature",
        "id": "7227a7ed-03b9-45a9-b5e4-64238e70303d",
        "geometry": {"type": "Point", "coordinates": [17.07693555, 48.15404512]},
        "properties": {
            "name": "ZOO",
            "popupContent":
                "Zoo---30 32 37 92 192 N29",
        }
    }, {
        "type": "Feature",
        "id": "2c16e63a-2cb3-4d5e-876b-374df193088b",
        "geometry": {"type": "Point", "coordinates": [17.07578106, 48.15464825]},
        "properties": {
            "name": "ZOO",
            "popupContent":
                "Zoo---30 32 37 92 192 N29"
        }
    },

        {
            "type": "Feature",
            "id": "5edbf6bb-1e64-47d7-91b1-50fe8281b09b",
            "geometry": {"type": "Point", "coordinates": [17.07511602, 48.15411428]},
            "properties": {
                "name": "ZOO",
                "popupContent":
                    "Zoo---31 39 N31",
            }
        },{
            "type": "Feature",
            "id": "b496d27c-be9b-433d-b3bb-0f47b874cb7f",
            "geometry": {"type": "Point", "coordinates": [17.07457933, 48.15459446]},
            "properties": {"name": "zoo", "popupContent":
                    "Zoo---31 39 N31",}
        }, {
            "type": "Feature",
            "id": "5d3a6a75-0e06-4eeb-a154-2ee5f32d018a",
            "geometry": {"type": "Point", "coordinates": [17.07241524, 48.1556532]},
            "properties": {
                "name": "TELEVIZIA",
                "popupContent":
                    "Televizia---31 39 N31",
            }
        }, {
            "type": "Feature",
            "id": "184f396d-84c7-48e4-8728-efee0001091f",
            "geometry": {"type": "Point", "coordinates": [17.07145105, 48.15652811]},
            "properties": {"name": "TELEVIZIA",
                "popupContent":
                    "Televizia---31 39 N31",}
        }, {
            "type": "Feature",
            "id": "4b2db968-8200-450f-b89a-f0d1d333261d",
            "geometry": {"type": "Point", "coordinates": [17.0686561, 48.15794655]},
            "properties": {"name": "CSU",
                "popupContent":
                    "Cintorín Slávičie údolie---139",}
        }, {
            "type": "Feature",
            "id": "0c86e74d-0058-4a44-9fe7-feabd4ddfec7",
            "geometry": {"type": "Point", "coordinates": [17.06824613, 48.15828159]},
            "properties": {"name": "csu",
                "popupContent":
                    "Cintorín Slávičie údolie---31 39 N31",}
        }, {
            "type": "Feature",
            "id": "f6940025-c4c7-4002-a683-fbf2e2eef6dc",
            "geometry": {"type": "Point", "coordinates": [17.07203614, 48.1483281]},
            "properties": {"name": "Bot",
                "popupContent":
                    "Botanická záhrada---29 32 N29 N33 N34",}
        }, {
            "type": "Feature",
            "id": "dc88b4ff-c7c6-40cb-9934-de32cff43d49",
            "geometry": {"type": "Point", "coordinates": [17.07230572, 48.14790744]},
            "properties": {"name": "bot",
                "popupContent":
                    "Botanická záhrada---29 32 N29 N33 N34",}
        }, {
            "type": "Feature",
            "id": "69b7f54e-06dd-48df-b814-7bc0a39c063f",
            "geometry": {"type": "Point", "coordinates": [17.06545773, 48.15377226]},
            "properties": {"name": "Grunty",
                "popupContent":
                    "Grunty---139",}
        }, {
            "type": "Feature",
            "id": "12a005b5-f8fd-49dd-9679-4eee58f5b896",
            "geometry": {"type": "Point", "coordinates": [17.06538921, 48.15346367]},
            "properties": {"name": "Grunty",
                "popupContent":
                    "Grunty---139",}
        }]
}


var tramicon = L.icon({
    iconUrl: 'tram.jpg',
    iconSize: [32, 37],
    iconAnchor: [16, 37],
    popupAnchor: [0, -28]
});


var villamos = {
    "type": "FeatureCollection",
    "features": [{
        "type": "Feature",
        "id": "8526b2bb-e9b8-4a28-9bf3-dabf23f6873b",
        "geometry": {"type": "Point", "coordinates": [17.0717854, 48.14813919]},
        "properties": {"name": "BZ",
            "popupContent":
                "Botanická záhrada---4 9",}
    }, {
        "type": "Feature",
        "id": "19f97a40-1b56-41a0-a4d5-3617777e7f48",
        "geometry": {"type": "Point", "coordinates": [17.07247124, 48.14812801]},
        "properties": {"name": "BZ",
            "popupContent":
                "Botanická záhrada---4 9",}
    }]
}


function onEachFeature(feature, layer) {
    // does this feature have a property named popupContent?
    if (feature.properties && feature.properties.popupContent) {
        layer.bindPopup(feature.properties.popupContent);
    }
}


L.geoJSON([bus], {

    style: function (feature) {
        return feature.properties && feature.properties.style;
    },

    onEachFeature: onEachFeature,

    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, {
            radius: 8,
            fillColor: "#ff7800",
            color: "#000",
            weight: 1,
            opacity: 1,
            fillOpacity: 0.8
        });
    }
}).addTo(mymap);


L.geoJSON([villamos], {

    style: function (feature) {
        return feature.properties && feature.properties.style;
    },

    onEachFeature: onEachFeature,

    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, {
            radius: 8,
            fillColor: "#cc3300",
            color: "#000",
            weight: 1,
            opacity: 1,
            fillOpacity: 0.8
        });
    }
}).addTo(mymap);


L.geoJSON(myGeoJSON, {
    onEachFeature: onEachFeature
}).addTo(mymap);

var coorsLayer = L.geoJSON(bus, {

    pointToLayer: function (feature, latLng) {

        return L.marker(latLng, {icon: busicon});

    },

    onEachFeature: onEachFeature
}).addTo(mymap);


var coorsLayer2 = L.geoJSON(villamos, {

    pointToLayer: function (feature, latLng) {

        return L.marker(latLng, {icon: tramicon});

    },

    onEachFeature: onEachFeature
}).addTo(mymap);


var control = L.Routing.control({
    waypoints: [

        L.latLng(),
        L.latLng(48.15201, 17.07311)
    ],
    router: new L.Routing.osrmv1({
        language: 'en',
        profile: 'car'
    }),
    geocoder: L.Control.Geocoder.nominatim({})
}).addTo(mymap);
