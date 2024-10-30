function initMap() {
  var map = new google.maps.Map(document.getElementById("map"), {
    center: {
      lat: 34.321936,
      lng: 78.912269,
    },
    zoom: 4,
    mapTypeId: "roadmap",
  });

map.data.setStyle({
    fillColor: 'green',
    fillOpacity: 0.7
});
map.data.loadGeoJson(
    "https://raw.githubusercontent.com/johan/world.geo.json/refs/heads/master/countries/IND.geo.json"
  );
}

window.initMap = initMap;
