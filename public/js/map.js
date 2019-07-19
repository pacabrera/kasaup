navigator.geolocation.getCurrentPosition(function(location) {
  var latlng = new L.LatLng(location.coords.latitude, location.coords.longitude);

  var mymap = L.map('mapid').setView(latlng, 13)
  L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoibmVpbGl0YWxpYSIsImEiOiJjang3YTZwbjkwOGMxM3pubjY4bXY1dGdtIn0.SfeziMKEblDmegU83aY3YA'
  }).addTo(mymap);


  var marker = L.marker(latlng).addTo(mymap);
});