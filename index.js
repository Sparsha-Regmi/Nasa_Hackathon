// Initialize the map and directions service
let map;
let directionsService;
let directionsRenderer;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 40.7128, lng: -74.0060 }, // Initial map center (New York City)
        zoom: 8,
    });

    directionsService = new google.maps.DirectionsService();
    directionsRenderer = new google.maps.DirectionsRenderer();
    directionsRenderer.setMap(map);
}

// Function to calculate and display the route
function calculateAndDisplayRoute() {
    const origin = document.getElementById("origin").value;
    const destination = document.getElementById("destination").value;
    const stops = document.querySelectorAll(".stop");

    let waypoints = [];
    stops.forEach((stopInput) => {
        const stop = stopInput.value;
        if (stop) {
            waypoints.push({
                location: stop,
                stopover: true,
            });
        }
    });

    directionsService.route(
        {
            origin: origin,
            destination: destination,
            waypoints: waypoints,
            optimizeWaypoints: true,
            travelMode: google.maps.TravelMode.DRIVING,
        },
        (response, status) => {
            if (status === "OK") {
                directionsRenderer.setDirections(response);
            } else {
                alert("Directions request failed due to " + status);
            }
        }
    );
}

// Add another stop input field
document.getElementById("add-stop-btn").addEventListener("click", () => {
    const stopsContainer = document.getElementById("stops-container");
    const newStopInput = document.createElement("input");
    newStopInput.type = "text";
    newStopInput.classList.add("stop");
    newStopInput.placeholder = "Enter a stop";
    stopsContainer.appendChild(newStopInput);
});

// Handle form submission and route generation
document.getElementById("route-form").addEventListener("submit", (event) => {
    event.preventDefault();
    calculateAndDisplayRoute();
});

// Initialize the map on window load
window.onload = initMap;
