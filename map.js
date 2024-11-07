var map = L.map('map').setView([56.44, 24.23], 8);

// Add the OpenStreetMap tile layer (after the map is created)
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);