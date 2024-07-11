// Define layers
var companyLayer = L.layerGroup();
var regionLayer = L.layerGroup();

// Add markers
companyLocations.forEach(location => {
    let marker = L.marker(location.coords).addTo(companyLayer);
    marker.bindPopup(`<b>${location.name}</b>`);
});

// Adding a region (polygon)
var region = L.polygon([
    [37.7749, -122.4194],
    [40.7128, -74.0060]
    // Add more coordinates for the polygon
]).addTo(regionLayer);

// Add layers
var baseLayers = { "Companies": companyLayer, "Regions": regionLayer };
L.control.layers(baseLayers).addTo(map);