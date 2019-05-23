// Global scope objects
var map;
var lat;
var lng;

var myDepartureObj, myDestinationObj, i, j, k, htmlText = "", departurePointName = "", departureAreaCenter = "";


// Local objects:
// ==============
// Object naming convention: Note that array names are plural, while item names within an array are singular, unless numeric.

// This object holds journey departure data as follows:
// 1. Name and co-ordinates for the approximate geographical centre of each departure area i.e. of the selected borough.
// 2. Name and co-ordinates for the major departure points within each selected departure area.
myDepartureObj = {
    "areaCenters": [
        {
            "area":"Newcastle",
            "latlng":[54.984429, -1.618050],
            "departurePoints": [
                {
                    "departurePointName":"Eldon Square Bus Station",
                    "latlng":[54.973473, -1.518303]
                },
                {
                    "departurePointName":"Monument Metro Station",
                    "latlng":[54.973473, -1.518303]
                },
            ]
        },
        {
            "area":"North Tyneside",
            "latlng":[55.028626, -1.521937],
            "departurePoints": [
                {
                    "departurePointName":"Wallsend Forum",
                    "latlng":[54.973473, -1.518303]
                },
                {
                    "departurePointName":"Tynemouth Metro Station",
                    "latlng":[54.973473, -1.518303]
                },
            ]
        },
        {
            "area":"Gateshead",
            "latlng":[54.936093, -1.676706],
            "departurePoints": [
                {
                    "departurePointName":"Gateshead Interchange",
                    "latlng":[54.973473, -1.518303]
                },
                {
                    "departurePointName":"Gateshead Metro Centre",
                    "latlng":[54.973473, -1.518303]
                },
                {
                    "departurePointName":"Blaydon Bus Station",
                    "latlng":[54.973473, -1.518303]
                },
            ]
        },
        {
            "area":"South Tyneside", 
            "latlng":[54.967314, -1.437396],
            "departurePoints": [
                {
                    "departurePointName":"Hebburn Centre",
                    "latlng":[54.973473, -1.518303]
                },
                {
                    "departurePointName":"Jarrow Bus Station",
                    "latlng":[54.979757, -1.491899]
                },
                {
                    "departurePointName":"South Shields Bus Station",
                    "latlng":[54.998236, -1.433126]
                }
            ]
        },
        {
            "area":"Sunderland",
            "latlng":[54.879431, -1.430500],
            "departurePoints": [
                {
                    "departurePointName":"Sunderland Park Lane Interchange",
                    "latlng":[54.973473, -1.518303]
                },
            ]
        }
    ]
};

// This object holds destination hospital data as follows:
// 1. Area, name and co-ordinates for the destination hospital.
myDestinationObj = {
    "destinationHospitals": [
        {
            "area":"Newcastle",
            "hospital":"Newcastle RVI",
            "latlng":[54.984429, -1.618050]
        },
        {
            "area":"Newcastle",
            "hospital":"Newcastle Freeman",
            "latlng":[54.984429, -1.618050]
        },
        {
            "area":"North Tyneside",
            "hospital":"Rake Lane",
            "latlng":[54.984429, -1.618050]
        },
        {
            "area":"Gateshead",
            "hospital":"Queen Elizabeth",
            "latlng":[54.984429, -1.618050]
        },
        {
            "area":"South Tyneside", 
            "hospital":"South Tyneside District",
            "latlng":[54.984429, -1.618050]
        },
        {
            "area":"Sunderland",
            "hospital":"Sunderland Royal",
            "latlng":[54.984429, -1.618050]
        }
    ]
};

document.addEventListener('DOMContentLoaded', function () {
    
    if (document.querySelectorAll('#map-canvas').length > 0) {
        // Use the language specified in the HTML tag. If none, set the default to English.
        if (document.querySelector('html').lang) {
            lang = document.querySelector('html').lang;
        } else {
            lang = 'en';
        };
      
        // Build the API script element, including the language setting.
        var js_file = document.createElement('script');
        js_file.type = 'text/javascript';
        js_file.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyB7rsJmO1wCdSzGW9sHNLGFX6zxbifGxDg&callback=initMap&libraries=places&language='+lang;

        // Inject the API script element into the HTML header.
        document.getElementsByTagName('head')[0].appendChild(js_file);
    };
});

function initMap() {

    var result;

    var directionsDisplay = new google.maps.DirectionsRenderer;
    var directionsService = new google.maps.DirectionsService;
    
    htmlText = "";
    
    directionsDisplay.setMap(map);

    // Display the appropriate borough map depending on which departure area was selected from the main menu.
    $("#departure-area li a").click(function() {

        // Get the departure area name from the selected menu item.
        var departureArea = $(this).attr("name");

        console.log("departureArea 1 = " + departureArea);
        
        // Set the area heading for the Route Planner panel.
        htmlText = "<h2>" + departureArea + "</h2>";
        document.getElementById("area-name").innerHTML = htmlText;

        // Call function to display departure area Google map and associated controls.
        // console.log("Call function getAreaCentre");
        result = getAreaCentre(departureArea);

        // Hide initial elements. 
        $("#county-map").hide();
        $(".initial-introduction").hide();

        // Show elements relevant to the departure area.
        $("#map-canvas").show();
        $("#route-planner").show();

    });

    // Compute and display the route between the selected departure towns and hospitals for the provided travel mode.
    document.getElementById("submit-button").addEventListener("click", function() {
        calculateAndDisplayRoute(directionsService, directionsDisplay);
    });
};

function getAreaCentre(departureArea) {

/*
    var myDepartureObj, myDestinationObj, i, j, k, htmlText = "", departurePointName = "";

    // Object naming convention: Note that array names are plural, while item names within an array are singular, unless numeric.
    
    // JSON object holds journey departure data as follows:
    // 1. Name and co-ordinates for the approximate geographical centre of each departure area i.e. of the selected borough.
    // 2. Name and co-ordinates for the major departure points within each selected departure area.
    myDepartureObj = {
        "areaCenters": [
            {
                "area":"Newcastle",
                "latlng":[54.984429, -1.618050],
                "departurePoints": [
                    {
                        "departurePointName":"Eldon Square Bus Station",
                        "latlng":[54.973473, -1.518303]
                    },
                    {
                        "departurePointName":"Monument Metro Station",
                        "latlng":[54.973473, -1.518303]
                    },
                ]
            },
            {
                "area":"North Tyneside",
                "latlng":[55.028626, -1.521937],
                "departurePoints": [
                    {
                        "departurePointName":"Wallsend Forum",
                        "latlng":[54.973473, -1.518303]
                    },
                    {
                        "departurePointName":"Tynemouth Metro Station",
                        "latlng":[54.973473, -1.518303]
                    },
                ]
            },
            {
                "area":"Gateshead",
                "latlng":[54.936093, -1.676706],
                "departurePoints": [
                    {
                        "departurePointName":"Gateshead Interchange",
                        "latlng":[54.973473, -1.518303]
                    },
                    {
                        "departurePointName":"Gateshead Metro Centre",
                        "latlng":[54.973473, -1.518303]
                    },
                    {
                        "departurePointName":"Blaydon Bus Station",
                        "latlng":[54.973473, -1.518303]
                    },
                ]
            },
            {
                "area":"South Tyneside", 
                "latlng":[54.967314, -1.437396],
                "departurePoints": [
                    {
                        "departurePointName":"Hebburn Centre",
                        "latlng":[54.973473, -1.518303]
                    },
                    {
                        "departurePointName":"Jarrow Bus Station",
                        "latlng":[54.979757, -1.491899]
                    },
                    {
                        "departurePointName":"South Shields Bus Station",
                        "latlng":[54.998236, -1.433126]
                    }
                ]
            },
            {
                "area":"Sunderland",
                "latlng":[54.879431, -1.430500],
                "departurePoints": [
                    {
                        "departurePointName":"Sunderland Park Lane Interchange",
                        "latlng":[54.973473, -1.518303]
                    },
                ]
            }
        ]
    };

    // JSON object holds destination hospital data as follows:
    // 1. Area, name and co-ordinates for the destination hospital.
    myDestinationObj = {
        "destinationHospitals": [
            {
                "area":"Newcastle",
                "hospital":"Newcastle RVI",
                "latlng":[54.984429, -1.618050]
            },
            {
                "area":"Newcastle",
                "hospital":"Newcastle Freeman",
                "latlng":[54.984429, -1.618050]
            },
            {
                "area":"North Tyneside",
                "hospital":"Rake Lane",
                "latlng":[54.984429, -1.618050]
            },
            {
                "area":"Gateshead",
                "hospital":"Queen Elizabeth",
                "latlng":[54.984429, -1.618050]
            },
            {
                "area":"South Tyneside", 
                "hospital":"South Tyneside District",
                "latlng":[54.984429, -1.618050]
            },
            {
                "area":"Sunderland",
                "hospital":"Sunderland Royal",
                "latlng":[54.984429, -1.618050]
            }
        ]
    };
*/    

    for (i in myDepartureObj.areaCenters) {
        // If area selected in menu matches value in object then get the corresponding
        // latitude and longtitude values to centre the Google map.
        if (departureArea == myDepartureObj.areaCenters[i].area) {
            lat = myDepartureObj.areaCenters[i].latlng[0];
            lng = myDepartureObj.areaCenters[i].latlng[1];

            // console.log("lat = " + lat);
            // console.log("lng = " + lng);

            departureAreaCenter = new google.maps.LatLng(lat, lng);
            map = new google.maps.Map(document.getElementById("map-canvas"), {
                zoom: 12,
                center: departureAreaCenter
            });        

            // Populate the departure point dropdown list.
            for (j in myDepartureObj.areaCenters[i].departurePoints) {
                htmlText += "<option>" + myDepartureObj.areaCenters[i].departurePoints[j].departurePointName + "</option>"; 
            };

            document.getElementById("departurePointList").innerHTML = htmlText; 

            // Populate the destination hospital dropdown list.
            htmlText = "";
            for (k in myDestinationObj.destinationHospitals) {
                htmlText += "<option>" + myDestinationObj.destinationHospitals[k].hospital + "</option>"; 
            };

            document.getElementById("destinationHospitalList").innerHTML = htmlText; 
            return;
        };
    };
};

function calculateAndDisplayRoute(directionsService, directionsDisplay) {

    var journeyStart;
    var journeyEnd;
    var journeyMode;
    
    var departurePoint = document.getElementById("departure-point").value;                 // Get the string identifying the departure point.
    console.log("departure point = " + departurePoint);
    
    // Set co-ordinates for departure point.
    switch (departurePoint)
    {
        case "hebburnCentre":
            journeyStart = new google.maps.LatLng(54.973473, -1.518303);
            break;
    
        case "jarrowBusStation":
            journeyStart  = new google.maps.LatLng(54.979757, -1.491899);
            break;
    
        case "southShieldsBusStation":
            journeyStart  = new google.maps.LatLng(54.998236, -1.433126);
            break;
    
        default:
            console.log("Error: Unknown departure point.");
            break;
    };

    var destinationHospital = document.getElementById("destination-hospital").value;     // Get the string identifying the destination hospital.
    console.log("destinationHospital = " + destinationHospital);

    // Set co-ordinates for destination hospitals.
    switch (destinationHospital)       // Pass the destination hospital name to the switch condition.
    {
        case "sunderlandRoyalHospital":
            journeyEnd = new google.maps.LatLng(54.902777, -1.408837);
            break;
    
        case "southTynesideDistrictHospital":
            journeyEnd = new google.maps.LatLng(54.971606, -1.427770);
            break;

        default:
            console.log("Error: Unknown destination hospital.");
            break;
    };

    journeyMode = document.getElementById("travelMode").value;                          // Get the string identifying the mode of travel.
    console.log("journeyMode = " + journeyMode);

    // Build the Directions Service request.
    var request = {
        origin: journeyStart,                               // Hebburn, Jarrow or South Shields (town centres)
        destination: journeyEnd,                            // Sunderland Royal or South Tyneside District (hospitals)
        provideRouteAlternatives: true,
        travelMode: google.maps.TravelMode[journeyMode]     // Travel mode is either TRANSIT, WALKING, BICYCLING or DRIVING.
    };
    
    directionsService.route(request, function(response, status) {
        if (status == 'OK') {
            directionsDisplay.setDirections(response);
        } else {
            window.alert("Directions request failed due to " + status);
        }
    });
};

/* KEEP STUFF BELOW - HAS CODE FOR MARKERS.

/* Map centering on a marker.

Everytime you add a new marker:

loc = new google.maps.LatLng(marker.position.lat(), marker.position.lng());
bounds.extend(loc);

After all markers have been added:

map.fitBounds(bounds);       # auto-zoom
map.panToBounds(bounds);     # auto-center

*/

/*
var map;

function initMap() {
    // Create a map object.
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        // Centre the map on South Tyneside borough.
        center: {
            lat: 54.967314,
            lng: -1.437396
        }
    });
    
    // Marker labels.
    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    // Locations of South Tyneside Metro stations.
    var locations = [
        { lat: 54.975637, lng: -1.520502 },  // Hebburn
        { lat: 54.979808, lng: -1.493701 },  // Jarrow
        { lat: 54.974583, lng: -1.465972 },  // Bede
        { lat: 54.971892, lng: -1.455415 },  // Simonside
        { lat: 54.976342, lng: -1.441676 },  // Tyne Dock
        { lat: 54.986519, lng: -1.431832 },  // Chichester
        { lat: 54.999409, lng: -1.433943 }   // South Shields
    ];
    
    // ALSO NEED METRO STATIONS WITHIN BOROUGH ON SUNDERLAND ROUTE!!
    
    // Create the markers.
    var markers = locations.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    // Add a marker clusterer to manage the markers.
    var markerCluster = new MarkerClusterer(map, markers,
        {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
        
};
*/