// Global scope variables:
// =======================

// Google Maps map object.
var map;

var directionsDisplay;
var directionsService;

// Latitude and longtitude for Area Centres.
var latAC, lngAC;

// Latitude and for Departure Points.
var latDP, lngDP;

// Latitude and longtitude for Destination Hospitals.
var latDH, lngDH;

// Names for Marker titles.
var hospitalName = "", locationName = ""

var myDepartureObj = {}, myDestinationObj = {};
var i = 0, j = 0, k = 0;
var htmlText = "", departurePointName = "", departureAreaCenter = "", departureArea = "";

// Local data objects:
// ===================
// Object naming convention: Note that array text values are plural, while text items within an array are singular.

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
                    "departurePointName":"Central Station",
                    "latlng":[54.969129, -1.616994]
                },
                {
                    "departurePointName":"Eldon Square Bus Station",
                    "latlng":[54.975914, -1.615974]
                },
                {
                    "departurePointName":"Gosforth High Street",
                    "latlng":[55.005029, -1.620197]
                },
                {
                    "departurePointName":"Haymarket Interchange",
                    "latlng":[54.977307, -1.614433]
                },
                {
                    "departurePointName":"Manors Metro Station",
                    "latlng":[54.974010, -1.604777]
                },
                {
                    "departurePointName":"Monument Metro Station",
                    "latlng":[54.973984, -1.61294]
                },
                {
                    "departurePointName":"St James' Metro Station",
                    "latlng":[54.974207, -1.620998]
                }
            ]
        },
        {
            "area":"North Tyneside",
            "latlng":[55.028626, -1.521937],
            "departurePoints": [
                {
                    "departurePointName":"Cullercoats Metro Station",
                    "latlng":[55.035060, -1.436182]
                },
                {
                    "departurePointName":"Four Lane Ends Interchange",
                    "latlng":[55.010142, -1.578631]
                },
                {
                    "departurePointName":"Monkseaton Metro Station",
                    "latlng":[55.042389, -1.458080]
                },
                {
                    "departurePointName":"North Shields Ferry Landing",
                    "latlng":[55.003621, -1.444665]
                },
                {
                    "departurePointName":"Tynemouth Metro Station",
                    "latlng":[55.017287, -1.428012]
                },
                {
                    "departurePointName":"Wallsend High Street",
                    "latlng":[54.992070, -1.527093]
                },
                {
                    "departurePointName":"Whitley Bay Metro Station",
                    "latlng":[55.040214, -1.442819]
                },
                {
                    "departurePointName":"Whitley Road",
                    "latlng":[55.042225, -1.445165]
                }
            ]
        },
        {
            "area":"Gateshead",
            "latlng":[54.936093, -1.676706],
            "departurePoints": [
                {
                    "departurePointName":"Blaydon Bus Station",
                    "latlng":[54.965027, -1.713570]
                },
                {
                    "departurePointName":"Felling Metro Station",
                    "latlng":[54.953165, -1.571774]
                },
                {
                    "departurePointName":"Gateshead Interchange",
                    "latlng":[54.961955, -1.604486]
                },
                {
                    "departurePointName":"Gateshead Metrocentre",
                    "latlng":[54.958589, -1.665397]
                },
                {
                    "departurePointName":"Gateshead Stadium Metro",
                    "latlng":[54.957770, -1.588465]
                },
                {
                    "departurePointName":"Heworth Interchange",
                    "latlng":[54.951814, -1.555921]
                }
            ]
        },
        {
            "area":"South Tyneside", 
            "latlng":[54.967314, -1.437396],
            "departurePoints": [
                {
                    "departurePointName":"Boldon ASDA, Henley Way",
                    "latlng":[54.948666, -1.464431]
                },
                {
                    "departurePointName":"Cleadon, Britannia Inn",
                    "latlng":[54.954574, -1.400603]
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
                    "departurePointName":"Hebburn Station Road",
                    "latlng":[54.973473, -1.518303]
                },
                {
                    "departurePointName":"Jarrow Bus Station",
                    "latlng":[54.979757, -1.491899]
                },
                {
                    "departurePointName":"South Shields Ferry Landing",
                    "latlng":[54.997118, -1.438963]
                },
                {
                    "departurePointName":"South Shields Interchange",
                    "latlng":[54.998236, -1.433126]
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
                    "departurePointName":"Houghton-le-Spring, Newbottle St",
                    "latlng":[54.844775, -1.471897]
                },
                {
                    "departurePointName":"Roker, Roker Hotel",
                    "latlng":[54.923974, -1.366047]
                },
                {
                    "departurePointName":"Seaburn Metro Station",
                    "latlng":[54.929243, -1.386268]
                },
                {
                    "departurePointName":"Seaburn, Morrisons",
                    "latlng":[54.936964, -1.368861]
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
                    "departurePointName":"Sunderland Interchange",
                    "latlng":[54.902297, -1.384927]
                },
                {
                    "departurePointName":"Washington Galleries Bus Station",
                    "latlng":[54.899282, -1.533903]
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
            "hospital":"Newcastle Freeman",
            "latlng":[55.002584, -1.593379]
        },
        {
            "area":"Newcastle",
            "hospital":"Newcastle RVI",
            "latlng":[54.980218, -1.619055]
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
        document.getElementById("area-name-routes").innerHTML = htmlText;

        // Set the area heading for the Markers panel.
        htmlText = "<h3> Markers for " + departureArea + "</h3>";
        document.getElementById("area-name-markers").innerHTML = htmlText;

        // Call function to display departure area Google map and associated user controls for both Routes and Markers tabs.
        getAreaCentre();
        
        // Once the area map object is defined, objects for the Directions Renderer and 
        // Directions Service can be instantiated.
        directionsDisplay = new google.maps.DirectionsRenderer;
        directionsService = new google.maps.DirectionsService;
        
        // Enable the Routes and Markers tabs.
        $("#routes").attr("data-toggle","tab");
        $("#markers").attr("data-toggle","tab");

        // Change colour of tab titles to show they are enabled.
        $("#routes").css("color", "#000");
        $("#markers").css("color", "#000");

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

            // Show Google Map of selected area.
            departureAreaCenter = new google.maps.LatLng(latAC, lngAC);
            map = new google.maps.Map(document.getElementById("map-canvas"), {
                zoom: 12,
                center: departureAreaCenter
            });        

            // Populate the departure point dropdown list on the Routes tab.
            htmlText = "";   
            for (j in myDepartureObj.areaCenters[i].departurePoints) {
                htmlText += "<option>" + myDepartureObj.areaCenters[i].departurePoints[j].departurePointName + "</option>"; 
            };
            document.getElementById("departure-point-list").innerHTML = htmlText; 

            // Populate the destination hospital dropdown list on the Routes tab.
            htmlText = "";   
            for (k in myDestinationObj.destinationHospitals) {
                htmlText += "<option>" + myDestinationObj.destinationHospitals[k].hospital + "</option>"; 
            };

            document.getElementById("destination-hospital-list").innerHTML = htmlText;
            break;
        };
    };
};

// Function called from: 'Find Route' button
function calculateAndDisplayRoute() {
    
    // If the multi-routes checkbox is checked then create new instances of the DirectionsRenderer 
    // and DirectionsService objects so more than one route can be shown on the map at the same time.
    if ($("#multi-routes-checkbox").prop("checked")) {
        directionsDisplay = new google.maps.DirectionsRenderer;
        directionsService = new google.maps.DirectionsService;
    };

    directionsDisplay.setMap(map);

    var journeyStart;
    var journeyEnd;
    var journeyMode;

    // Get the departure point name from the selected dropdown item.
    var departurePointName = $("#departure-point-list option:selected").val();

    // Get the destination hospital name from the selected dropdown item.
    var destinationHospitalName = $("#destination-hospital-list option:selected").val();

    // Get co-ordinates for departure point.
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

    // Get co-ordinates for destination hospital.
    for (i in myDestinationObj.destinationHospitals) {
        if (destinationHospitalName == myDestinationObj.destinationHospitals[i].hospital) {
            latDH = myDestinationObj.destinationHospitals[i].latlng[0];
            lngDH = myDestinationObj.destinationHospitals[i].latlng[1];
            break;
        };
    };

    // Prepare the Directions Service request.
    journeyStart = new google.maps.LatLng(latDP, lngDP);     // Departure Point co-ordinates.
    journeyEnd = new google.maps.LatLng(latDH, lngDH);       // Destination Hospital co-ordinates.
    
    // Get the travel mode name from the selected dropdown item.
    journeyMode = $("#travel-mode-list option:selected").val();

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

// Function called from: 'Show Markers' button
function createMarkers() {

    // Marker labels.
    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var locationsDepartures = [], locationsHospitals  = [];

    // If departures checkbox is checked, get co-ordinates for all departure points in the selected area.
    if ($("#departures-checkbox").prop("checked") == true) {
        locationsDepartures = [];
        for (i in myDepartureObj.areaCenters) {
            if (departureArea == myDepartureObj.areaCenters[i].area) {
                for (j in myDepartureObj.areaCenters[i].departurePoints) {
                    latDP = myDepartureObj.areaCenters[i].departurePoints[j].latlng[0];
                    lngDP = myDepartureObj.areaCenters[i].departurePoints[j].latlng[1];
                    locationName = myDepartureObj.areaCenters[i].departurePoints[j].departurePointName;
                    locationsDepartures[j] = {lat: latDP, lng: lngDP, locName: locationName};
                };
            };
        };
        var markersDepartures = locationsDepartures.map(function(location, i) {
            return new google.maps.Marker({
                position: location,
                label: labels[i % labels.length],
                icon: {
                    url: "https://maps.google.com/mapfiles/ms/icons/red.png",
                    scaledSize: new google.maps.Size(50, 50),
                    labelOrigin: new google.maps.Point(25, 18)
                }    
            });
        });
        var markerCluster = new MarkerClusterer(map, markersDepartures,
            {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
    };
    
    // If hospital checkbox is checked, get co-ordinates for all hospitals across Tyne & Wear.
    if ($("#hospitals-checkbox").prop("checked") == true) {
        locationsHospitals = [];
        for (i in myDestinationObj.destinationHospitals) {
                latDH = myDestinationObj.destinationHospitals[i].latlng[0];
                lngDH = myDestinationObj.destinationHospitals[i].latlng[1];
                hospitalName = myDestinationObj.destinationHospitals[i].hospital;
                locationsHospitals[i] = {lat: latDH, lng: lngDH, hosName: hospitalName};
        };
        var markersHospitals = locationsHospitals.map(function(location, i) {
            return new google.maps.Marker({
                position: location,
                label: labels[i % labels.length],
                icon: {
                    url: "https://maps.google.com/mapfiles/ms/icons/blue.png",
                    scaledSize: new google.maps.Size(50, 50),
                    labelOrigin: new google.maps.Point(25, 18)
                }    
            });
        });
        // Add a marker clusterer to manage the markers.
        var markerCluster = new MarkerClusterer(map, markersHospitals,
            {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
    };
    
    if (($("#departures-checkbox").prop("checked") == false) && ($("#hospitals-checkbox").prop("checked") == false)) {
        alert("At least one checkbox must be checked to display markers.");
    };

};