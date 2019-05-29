7// Global scope variables:
// =======================

// Google Maps map object.
var map;

// Latitude and longtitude variables for Area Centres.
var latAC, lngAC;

// Latitude and longtitude variables for Departure Points.
var latDP, lngDP;

// Latitude and longtitude variables for Destination Hospitals.
var latDH, lngDH;

var myDepartureObj = {}, myDestinationObj = {};
var i = 0, j = 0, k = 0;
var htmlText = "", departurePointName = "", departureAreaCenter = "", departureArea = "";

// Local data objects:
// ===================
// Object naming convention: Note that array names are plural, while item names within an array are singular, unless numeric.

// This object holds journey departure data as follows:
// 1. Name and co-ordinates for the approximate geographical centre of each departure area i.e. of the selected borough.
// 2. Name and co-ordinates for the major departure points, transport hubs, etc. within each selected departure area.
myDepartureObj = {
    "areaCenters": [
        {
            "area":"Newcastle",
            "latlng":[54.984429, -1.618050],
            "departurePoints": [
                {
                    "departurePointName":"Eldon Square Bus Station",
                    "latlng":[54.975914, -1.615974]
                },
                {
                    "departurePointName":"Monument Metro Station",
                    "latlng":[54.973984, -1.61294]
                },
                {
                    "departurePointName":"Manors Metro Station",
                    "latlng":[54.974010, -1.604777]
                },
                {
                    "departurePointName":"St James' Metro Station",
                    "latlng":[54.974207, -1.620998]
                },
                {
                    "departurePointName":"Haymarket Interchange",
                    "latlng":[54.977307, -1.614433]
                },
                {
                    "departurePointName":"Gosforth High Street",
                    "latlng":[55.005029, -1.620197]
                }
            ]
        },
        {
            "area":"North Tyneside",
            "latlng":[55.028626, -1.521937],
            "departurePoints": [
                {
                    "departurePointName":"Four Lane Ends Interchange",
                    "latlng":[55.010142, -1.578631]
                },
                {
                    "departurePointName":"Wallsend High Street",
                    "latlng":[54.992070, -1.527093]
                },
                {
                    "departurePointName":"Whitley Road",
                    "latlng":[55.042225, -1.445165]
                },
                {
                    "departurePointName":"Whitley Bay Metro Station",
                    "latlng":[55.040214, -1.442819]
                },
                {
                    "departurePointName":"Cullercoats Metro Station",
                    "latlng":[55.035060, -1.436182]
                },
                {
                    "departurePointName":"Tynemouth Metro Station",
                    "latlng":[55.017287, -1.428012]
                }
            ]
        },
        {
            "area":"Gateshead",
            "latlng":[54.936093, -1.676706],
            "departurePoints": [
                {
                    "departurePointName":"Gateshead Interchange",
                    "latlng":[54.961955, -1.604486]
                },
                {
                    "departurePointName":"Gateshead Metrocentre",
                    "latlng":[54.958589, -1.665397]
                },
                {
                    "departurePointName":"Heworth Interchange",
                    "latlng":[54.951814, -1.555921]
                },
                {
                    "departurePointName":"Gateshead Stadium Metro",
                    "latlng":[54.957770, -1.588465]
                },
                {
                    "departurePointName":"Blaydon Bus Station",
                    "latlng":[54.965027, -1.713570]
                }
            ]
        },
        {
            "area":"South Tyneside", 
            "latlng":[54.967314, -1.437396],
            "departurePoints": [
                {
                    "departurePointName":"Hebburn Station Road",
                    "latlng":[54.973473, -1.518303]
                },
                {
                    "departurePointName":"Jarrow Bus Station",
                    "latlng":[54.979757, -1.491899]
                },
                {
                    "departurePointName":"South Shields Interchange",
                    "latlng":[54.998236, -1.433126]
                },
                {
                    "departurePointName":"Boldon ASDA, Henley Way",
                    "latlng":[54.948666, -1.464431]
                },
                {
                    "departurePointName":"East Boldon, Addison Road",
                    "latlng":[54.942792, -1.452515]
                },
                {
                    "departurePointName":"East Boldon, The Black Bull",
                    "latlng":[54.945710, -1.438443]
                },
                {
                    "departurePointName":"Cleadon, Britannia Inn",
                    "latlng":[54.954574, -1.400603]
                },
                {
                    "departurePointName":"Whitburn",
                    "latlng":[54.950890, -1.364354]
                }
            ]
        },
        {
            "area":"Sunderland",
            "latlng":[54.879431, -1.430500],
            "departurePoints": [
                {
                    "departurePointName":"Seaburn Metro Station",
                    "latlng":[54.929243, -1.386268]
                },
                {
                    "departurePointName":"Seaburn, Morrisons",
                    "latlng":[54.936964, -1.368861]
                },
                {
                    "departurePointName":"Roker, Roker Hotel",
                    "latlng":[54.923974, -1.366047]
                },
                {
                    "departurePointName":"Stadium of Light Metro",
                    "latlng":[54.918147, -1.383073]
                },
                {
                    "departurePointName":"St Peter's Metro",
                    "latlng":[54.911061, -1.383770]
                },
                {
                    "departurePointName":"Washington Galleries Bus Station",
                    "latlng":[54.899282, -1.533903]
                },
                {
                    "departurePointName":"Houghton-le-Spring, Newbottle St",
                    "latlng":[54.844775, -1.471897]
                },
                {
                    "departurePointName":"Sunderland Interchange",
                    "latlng":[54.902297, -1.384927]
                }
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
            "latlng":[54.980218, -1.619055]
        },
        {
            "area":"Newcastle",
            "hospital":"Newcastle Freeman",
            "latlng":[55.002584, -1.593379]
        },
        {
            "area":"North Tyneside",
            "hospital":"North Tyneside General",
            "latlng":[55.025446, -1.467924]
        },
        {
            "area":"Gateshead",
            "hospital":"Queen Elizabeth",
            "latlng":[54.938602, -1.582190]
        },
        {
            "area":"South Tyneside", 
            "hospital":"South Tyneside District",
            "latlng":[54.971428, -1.427781]
        },
        {
            "area":"Sunderland",
            "hospital":"Sunderland Royal",
            "latlng":[54.902596, -1.408836]
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

    // Display the appropriate borough map depending on which departure area was selected from the main menu.
    $("#departure-area li a").click(function() {

        // Get the departure area name from the selected menu item.
        departureArea = $(this).attr("name");

        // Set the area heading for the Route Planner panel.
        htmlText = "<h3> Routes from " + departureArea + "</h3>";
        document.getElementById("area-name").innerHTML = htmlText;

        // Call function to display departure area Google map and associated user controls.
        getAreaCentre();
        
        // Enable the Routes and Markers tabs.
        $("#routes").attr("data-toggle","tab");
        $("#markers").attr("data-toggle","tab");

        // Make the Routes tab active.
        $('.nav-tabs a[id="routes"]').tab('show');

        // Hide initial elements. 
        $("#county-map").hide();

        // Show Google Map centred on selected departure area.
        $("#map-canvas").show();

    });
};

function getAreaCentre() {

    for (i in myDepartureObj.areaCenters) {
        // If area selected in menu matches value in object then get the corresponding
        // latitude and longtitude values to centre the Google map.
        if (departureArea == myDepartureObj.areaCenters[i].area) {
            latAC = myDepartureObj.areaCenters[i].latlng[0];
            lngAC = myDepartureObj.areaCenters[i].latlng[1];

            // console.log("latAC = " + latAC);
            // console.log("lngAC = " + lngAC);

            // Show Google Map of selected area.
            departureAreaCenter = new google.maps.LatLng(latAC, lngAC);
            map = new google.maps.Map(document.getElementById("map-canvas"), {
                zoom: 12,
                center: departureAreaCenter
            });        

            // Populate the departure point dropdown list.
            for (j in myDepartureObj.areaCenters[i].departurePoints) {
                htmlText += "<option>" + myDepartureObj.areaCenters[i].departurePoints[j].departurePointName + "</option>"; 
            };

            document.getElementById("departure-point-list").innerHTML = htmlText; 

            // Populate the destination hospital dropdown list.
            htmlText = "";   
            for (k in myDestinationObj.destinationHospitals) {
                htmlText += "<option>" + myDestinationObj.destinationHospitals[k].hospital + "</option>"; 
            };

            document.getElementById("destination-hospital-list").innerHTML = htmlText;
            htmlText = "";   
            break;
        };
    };
};

function calculateAndDisplayRoute() {

    var directionsDisplay = new google.maps.DirectionsRenderer;
    var directionsService = new google.maps.DirectionsService;
    
    directionsDisplay.setMap(map);

    var journeyStart;
    var journeyEnd;
    var journeyMode;

    // Get the departure point name from the selected dropdown item.
    var departurePointName = $("#departure-point-list option:selected").val();

    // Get the destination hospital name from the selected dropdown item.
    var destinationHospitalName = $("#destination-hospital-list option:selected").val();

    // console.log("departurePointName = " + departurePointName);
    // console.log("destinationHospitalName = " + destinationHospitalName);

    // Set co-ordinates for departure point.
    for (i in myDepartureObj.areaCenters) {
        if (departureArea == myDepartureObj.areaCenters[i].area) {
            // If departure point selected in menu matches value in object then get the corresponding
            // latitude and longtitude values for that point on the Google map.
            for (j in myDepartureObj.areaCenters[i].departurePoints) {
                if (departurePointName == myDepartureObj.areaCenters[i].departurePoints[j].departurePointName) {
                    latDP = myDepartureObj.areaCenters[i].departurePoints[j].latlng[0];
                    lngDP = myDepartureObj.areaCenters[i].departurePoints[j].latlng[1];
                    break;
                };
            };
        };
    };

    // console.log("latDP = " + latDP);
    // console.log("lngDP = " + lngDP);

    // Set co-ordinates for destination hospital.
    for (i in myDestinationObj.destinationHospitals) {
        if (destinationHospitalName == myDestinationObj.destinationHospitals[i].hospital) {
            latDH = myDestinationObj.destinationHospitals[i].latlng[0];
            lngDH = myDestinationObj.destinationHospitals[i].latlng[1];
            break;
        };
    };

    // console.log("latDH = " + latDH);
    // console.log("lngDH = " + lngDH);

    // Prepare the Directions Service request.
    journeyStart = new google.maps.LatLng(latDP, lngDP);     // Departure Point co-ordinates.
    journeyEnd = new google.maps.LatLng(latDH, lngDH);       // Destination Hospital co-ordinates.
    
    // Get the travel mode name from the selected dropdown item.
    journeyMode = $("#travel-mode-list option:selected").val();
    console.log("journeyMode = " + journeyMode);

    var request = {
        origin: journeyStart,               
        destination: journeyEnd,        
        provideRouteAlternatives: true,
        travelMode: google.maps.TravelMode[journeyMode]     // Travel mode is either TRANSIT, WALKING, BICYCLING or DRIVING.
    };
    
    directionsService.route(request, function(response, status) {
        if (status == 'OK') {
            directionsDisplay.setDirections(response);
        } else {
            window.alert("Directions request failed due to " + status);
        };
    });
};

function createMarkers() {

    var mapMarkers;

    // Display the appropriate marker depending on which type was selected from the main menu.
//    $("#map-markers li a").click(function() {

        // Get the marker type from the selected menu item.
/*        mapMarkers = $(this).attr("name");

        // Set the marker type for the Marker type.
        htmlText = "<h2>" + mapMarkers + "</h2>";
        document.getElementById("marker-type-name").innerHTML = htmlText;

        // Call function to display map markers on Google Map.
        //getAreaCentre();
*/
//    });

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


