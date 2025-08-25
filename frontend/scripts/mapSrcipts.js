var indiaBounds = [
    [6.4627, 68.1097],
    [37.0970, 97.3953]
];

var map = L.map('map', {
    center: [22.9734, 78.6569],
    zoom: 5,
    minZoom: 4,
    maxZoom: 18,
    maxBounds: indiaBounds,
    maxBoundsViscosity: 1.0,
    zoomControl: false,
    worldCopyJump: false, 
    dragging: true
});

L.control.zoom({ position: 'bottomleft' }).addTo(map);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

function swapLocations() {
    const source = document.getElementById('source');
    const destination = document.getElementById('destination');
    [source.value, destination.value] = [destination.value, source.value];
}

function go() {
    alert(`Searching route from ${document.getElementById('source').value} to ${document.getElementById('destination').value}`);
}

function toggleProfile() {
    const popup = document.getElementById('profilePopup');
    popup.style.display = popup.style.display === "block" ? "none" : "block";
}
