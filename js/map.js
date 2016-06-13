//load Google Maps
var map;
function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: 37.090, lng: -95.713},
		zoom: 4
	});
};