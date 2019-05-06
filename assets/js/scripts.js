// Create the map object variable in the global scope so it’s easier to interact with later.
var map;

document.addEventListener('DOMContentLoaded', function () {
    
    if (document.querySelectorAll('#map').length > 0) {
        // Use the language specified in the HTML tag. If none set then default to English.
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

    var directionsDisplay = new google.maps.DirectionsRenderer;
    var directionsService = new google.maps.DirectionsService;

    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: {lat: 54.967314, lng: -1.437396}  // Initially centre map on centre of South Tyneside borough.
    });
    directionsDisplay.setMap(map);

    // Compute and display the route between the selected departure towns and hospitals for the provided travel mode.
    document.getElementById("submit-button").addEventListener("click", function() {
        calculateAndDisplayRoute(directionsService, directionsDisplay);
    });
};

function calculateAndDisplayRoute(directionsService, directionsDisplay) {

    var journeyStart;
    var journeyEnd;
    var journeyMode;
    
    var departureTown = document.getElementById("departureTown").value;                 // Get the string identifying the departure town.
    console.log("departureTown = " + departureTown);
    
    // Set co-ordinates for departure town.
    switch (departureTown)             // Pass the departure town name to the switch condition.
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
            console.log("Error: Unknown departure town.");
            break;
    };

    var destinationHospital = document.getElementById("destinationHospital").value;     // Get the string identifying the destination hospital.
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