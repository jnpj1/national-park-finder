// Array of national parks in the US
var nationalParks = [
	{name: "Acadia"},
	{name: "American Samoa"},
	{name: "Arches"},
	{name: "Badlands"},
	{name: "Big Bend"},
	{name: "Biscayne"},
	{name: "Black Canyon of the Gunnison"},
	{name: "Bryce Canyon"},
	{name: "Canyonlands"},
	{name: "Capitol Reef"},
	{name: "Carlsbad Caverns"},
	{name: "Channel Islands"},
	{name: "Congaree"},
	{name: "Crater Lake"},
	{name: "Cuyahoga Valley"},
	{name: "Death Valley"},
	{name: "Denali"},
	{name: "Dry Tortugas"},
	{name: "Everglades"},
	{name: "Gates of the Arctic"},
	{name: "Glacier"},
	{name: "Glacier Bay"},
	{name: "Grand Canyon"},
	{name: "Grand Teton"},
	{name: "Great Basin"},
	{name: "Great Sand Dunes"},
	{name: "Great Smoky Mountains"},
	{name: "Guadelupe Mountains"},
	{name: "Haleakala"},
	{name: "Hawaii Volcanoes"},
	{name: "Hot Springs"},
	{name: "Isle Royale"},
	{name: "Joshua Tree"},
	{name: "Katmai"},
	{name: "Kenai Fjords"},
	{name: "Kings Canyon"},
	{name: "Kobuk Valley"},
	{name: "Lake Clark"},
	{name: "Lassen Volcanic"},
	{name: "Mammoth Cave"},
	{name: "Mesa Verde"},
	{name: "Mount Rainier"},
	{name: "North Cascades"},
	{name: "Olympic"},
	{name: "Petrified Forest"},
	{name: "Pinnacles"},
	{name: "Redwood"},
	{name: "Rocky Mountain"},
	{name: "Saguaro"},
	{name: "Sequoia"},
	{name: "Shenandoah"};
	{name: "Theodore Roosevelt"},
	{name: "Virgin Islands"},
	{name: "Voyageurs"},
	{name: "Wind Cave"},
	{name: "Wrangell-St. Elias"},
	{name: "Yellowstone"},
	{name: "Yosemite"},
	{name: "Zion"}
];

// Object constructor for national parks
var Park = function(data) {
	this.name = ko.observable(data.name);

	// Search Google Maps for location data of park
	var service = new google.maps.places.PlacesService(map);
	var parkName = this.name + "national park";
	var request = {query: parkName};
	var parkData = service.textSearch(request);
	console.log(parkData);
}

var ViewModel = function() {
	var self = this;

	// Create array of park objects using the Park constructor
	var parkList = ko.observableArray([]);
	nationalParks.forEach(function(park) {
		self.parkList.push(new Park(park));
	});

};

ko.applyBindings(new ViewModel());