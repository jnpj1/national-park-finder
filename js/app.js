// Array of national parks in the US
var nationalParks = [
	{
		name: 'Acadia',
		lat: 44.332,
		lon: -68.279
	},
	{
		name: 'American Samoa',
		lat: -14.258,
		lon: -170.686
	},
	{
		name: 'Arches',
		lat: 38.722,
		lon: -109.585
	},
	{
		name: 'Badlands',
		lat: 43.848,
		lon: -102.339
	},
	{
		name: 'Big Bend',
		lat: 29.172,
		lon: -103.244
	},
	{
		name: 'Biscayne',
		lat: 25.398,
		lon: -80.225
	},
	{
		name: 'Black Canyon of the Gunnison',
		lat: 38.586,
		lon: -107.776
	},
	{
		name: 'Bryce Canyon',
		lat: 37.612,
		lon: -112.195
	},
	{
		name: 'Canyonlands',
		lat: 38.253,
		lon: -109.944
	},
	{
		name: 'Capitol Reef',
		lat: 38.367,
		lon: -111.261
	},
	{
		name: 'Carlsbad Caverns',
		lat: 32.148,
		lon: -104.557
	},
	{
		name: 'Channel Islands',
		lat: 34.005,
		lon: -119.806
	},
	{
		name: 'Congaree',
		lat: 33.794,
		lon: -80.771
	},
	{
		name: 'Crater Lake',
		lat: 42.868,
		lon: -122.169
	},
	{
		name: 'Cuyahoga Valley',
		lat: 41.281,
		lon: -81.568
	},
	{
		name: 'Death Valley',
		lat: 36.505,
		lon: -117.080
	},
	{
		name: 'Denali',
		lat: 63.115,
		lon: -151.193
	},
	{
		name: 'Dry Tortugas',
		lat: 24.629,
		lon: -82.873
	},
	{
		name: 'Everglades',
		lat: 25.287,
		lon: -80.899
	},
	{
		name: 'Gates of the Arctic',
		lat: 66.922,
		lon: -151.489
	},
	{
		name: 'Glacier',
		lat: 48.760,
		lon: -113.787
	},
	{
		name: 'Glacier Bay',
		lat: 58.666,
		lon: -136.900
	},
	{
		name: 'Grand Canyon',
		lat: 36.107,
		lon: -112.113
	},
	{
		name: 'Grand Teton',
		lat: 43.791,
		lon: -110.682
	},
	{
		name: 'Great Basin',
		lat: 38.984,
		lon: -114.300
	},
	{
		name: 'Great Sand Dunes',
		lat: 37.792,
		lon: -105.594
	},
	{
		name: 'Great Smoky Mountains',
		lat: 35.628,
		lon: -83.500
	},
	{
		name: 'Guadalupe Mountains',
		lat: 31.945,
		lon: -104.873
	},
	{
		name: 'Haleakala',
		lat: 20.721,
		lon: -156.155
	},
	{
		name: 'Hawaii Volcanoes',
		lat: 19.420,
		lon: -155.289
	},
	{
		name: 'Hot Springs',
		lat: 34.522,
		lon: -93.042
	},
	{
		name: 'Isle Royale',
		lat: 47.996,
		lon: -88.909
	},
	{
		name: 'Joshua Tree',
		lat: 33.874,
		lon: -115.901
	},
	{
		name: 'Katmai',
		lat: 58.643,
		lon: -154.702
	},
	{
		name: 'Kenai Fjords',
		lat: 60.044,
		lon: -149.816
	},
	{
		name: 'Kings Canyon',
		lat: 36.904,
		lon: -118.550
	},
	{
		name: 'Kobuk Valley',
		lat: 67.354,
		lon: -159.148
	},
	{
		name: 'Lake Clark',
		lat: 60.430,
		lon: -154.303
	},
	{
		name: 'Lassen Volcanic',
		lat: 40.498,
		lon: -121.421
	},
	{
		name: 'Mammoth Cave',
		lat: 37.187,
		lon: -86.100
	},
	{
		name: 'Mesa Verde',
		lat: 37.231,
		lon: -108.462
	},
	{
		name: 'Mount Rainier',
		lat: 46.880,
		lon: -121.727
	},
	{
		name: 'North Cascades',
		lat: 48.772,
		lon: -121.298
	},
	{
		name: 'Olympic',
		lat: 47.802,
		lon: -123.604
	},
	{
		name: 'Petrified Forest',
		lat: 34.910,
		lon: -109.807
	},
	{
		name: 'Pinnacles',
		lat: 36.491,
		lon: -121.183
	},
	{
		name: 'Redwood',
		lat: 41.213,
		lon: -124.005
	},
	{
		name: 'Rocky Mountain',
		lat: 40.343,
		lon: -105.684
	},
	{
		name: 'Saguaro',
		lat: 32.297,
		lon: -111.167
	},
	{
		name: 'Sequoia',
		lat: 36.486,
		lon: -118.566
	},
	{
		name: 'Shenandoah',
		lat: 38.293,
		lon: -78.680
	},
	{
		name: 'Theodore Roosevelt',
		lat: 46.979,
		lon: -103.539
	},
	{
		name: 'Virgin Islands',
		lat: 18.343,
		lon: -64.749
	},
	{
		name: 'Voyageurs',
		lat: 48.510,
		lon: -92.925
	},
	{
		name: 'Wind Cave',
		lat: 43.605,
		lon: -103.421
	},
	{
		name: 'Wrangell-St. Elias',
		lat: 61.711,
		lon: -142.986
	},
	{
		name: 'Yellowstone',
		lat: 44.428,
		lon: -110.589
	},
	{
		name: 'Yosemite',
		lat: 37.865,
		lon: -119.538
	},
	{
		name: 'Zion',
		lat: 37.298,
		lon: -113.026
	}
];

// Object constructor for national parks
var Park = function(data) {
	this.name = ko.observable(data.name);
	this.latLon = {lat: data.lat, lng: data.lon};
	this.shouldDisplay = ko.observable(true);
	this.favorited = ko.observable(false);
	this.associatedMarker;
};

// Knockout ViewModel
var ViewModel = function() {
	var self = this;

	// Create array of park objects using the Park constructor
	this.parkList = ko.observableArray([]);
	nationalParks.forEach(function(park) {
		self.parkList.push(new Park(park));
	});

	// Variable for holding open/closed status of sidebar
	this.sidebarOpenStatus = ko.observable(true);

	// Toggle sidebar open/close value change on hamburger click
	this.sidebarToggleStatus = function() {
		var currentStatus = self.sidebarOpenStatus();
		self.sidebarOpenStatus(!currentStatus);
	};

	// Initialize Google map, info window, and marker array variables
	this.map;
	this.markers = [];
	this.infoWindow;

	// Function for initializing map view, markers, and info windows
	this.initMap = function() {
		map = new google.maps.Map(document.getElementById('map'), {
			center: {lat: 37.090, lng: -91},
			zoom: 4,
			maxZoom: 8,
			minZoom: 2,
			mapTypeId: google.maps.MapTypeId.TERRAIN
		});

		// Initialize info window outside of forEach function to allow only one to be opened
		self.infoWindow = new google.maps.InfoWindow();

		// Create initial markers
		self.parkList().forEach(function(park){
			self.markerRender(park);
		});
	};

	// Function for rendering markers
	this.markerRender = function(park) {

		// Create marker
		var marker = new google.maps.Marker({
			position: park.latLon,
			map: map,
			title: park.name()
		});

		// Push marker to array of markers for future search result display manipulation
		self.markers.push(marker);

		// Associate marker with its corresponding park
		park.associatedMarker = marker;

		// Add click event listener to open info windows and search for necessary information
		marker.addListener('click', function() {
			self.infoWindowRender(map, marker, park);
		});
	};

	// Function for rendering info windows
	this.infoWindowRender = function(map, marker, park) {

		// Create HTML content string for text in info window
		var content = '<div id="text-content"><h3 id="window-heading">' + park.name() +
			' National Park</h3><h4 id="favorite-star">&#9733</h4></div><div id="wiki-content">' +
			'</div><div id="image-content"></div>';

		// Open and pass content string to info window
		self.infoWindow.open(map, marker);
		self.infoWindow.setContent(content);

		// Call functions for searching and adding photos and wikipedia information
		self.photoAppender(park.name());
		self.wikiAppender(park.name());

		// Add 'favorite-star' class if park is favorited
		if (park.favorited()) {
			$('#favorite-star').addClass('favorite-star')
		}

		// Animate marker for one bounce
		marker.setAnimation(google.maps.Animation.BOUNCE);
		setTimeout(function() {
			marker.setAnimation(null);
		}, 750);

		// Add event listener for click on favorite star and toggle favorited status
		$('#favorite-star').click(function() {
			self.toggleFavorite(park);
			$('#favorite-star').toggleClass('favorite-star');
		});
	}

	// Function for searching for google places photos and adding to info window HTML
	this.photoAppender = function(data) {
		var parkName = data + ' national park';

		// Initialize variable for holding innerHTML of image-content div
		var imageContent = '';

		// Initialize google places service
		var service = new google.maps.places.PlacesService(map);

		// Callback function for google places search that will find the park's place_id
		// and query for images of the park.  The images will then be appended
		// to the imageContent HTML string and added to info window.
		function callback(results, status) {
			var place = results[0].place_id;
			var imageContentDiv = $('#image-content');
			service.getDetails({placeId: place}, function(results, status) {
				if (status == google.maps.places.PlacesServiceStatus.OK) {

					// Check if Google places information contains any photos.
					// If no photos, update content to notify user.
					if (results.photos) {

						// Add url and attribution of first three (or less) photos to HTML strings for display
						for (var i = 0; i < 3; i++) {

							// Check if there is a photo for the current index to avoid errors when only one or two
							// photos were returned
							if (results.photos[i]) {
								var url = results.photos[i].getUrl({maxWidth: 100, maxHeight: 100});
								var attr = results.photos[i].html_attributions[0];
								imageContent += ('<div id="image"><img src="' + url + '"><br>' + attr
									+ '</div>');
								console.log(imageContent);
							}
						}
					} else {
						imageContent = '<p id="places-fail">No Google Places images for this park.</p>';
						imageContentDiv.css('height', '40px');
					}
				} else {
					imageContent = '<p id="places-fail">Failed to load Google Places images.</p>';
					imageContentDiv.css('height', '40px');
				}
				imageContentDiv.html(imageContent);
			});
		};

		// Help Google disambiguate Glacier Bay National Park
		if (data === 'Glacier Bay') {
			parkName = data + ' national park and preserve';
			$('#wiki-content').css({'font-size': '12px', 'height': '180px', 'margin-top': '10px'});
		}

		// Google places text search for park
		service.textSearch({query: parkName, key: 'AIzaSyCFdYCzwJO6Vb5OkThG5sZ53_AiVI4v3eI'}, callback);
	};

	// Function for searching for wikipedia information and adding to info window HTML
	this.wikiAppender = function(data) {
		var searchString = data + ' national park';
		var wikiContentDiv = $('#wiki-content');

		// Handle wikipedia disambiguation of Glacier National Park by adding country
		if (data === 'Glacier') {
			searchString += ' U.S.';
		}

		// Define API query string
		var urlWiki = 'https://en.wikipedia.org/w/api.php';
		var firstUrlWiki = urlWiki + '?' + $.param({
        	'action': 'query',
        	'format': 'json',
       		'srsearch': searchString,
        	'list': 'search',
        	'srlimit': 1
   		});

		// Timeout function to display error if Wikipedia ajax requests fail
    	var wikiRequestTimeout = setTimeout(function() {
			wikiContentDiv.html('<p id="wiki-fail">Wikipedia article could not be loaded</p>');
			wikiContentDiv.css('height', '40px');
    	}, 3000);

    	// Variable to store HTML string of wikipedia information
    	var wikiContent = '';

    	// Search for official article title in first ajax request.  Use title in second ajax request
    	// to return extract of article.
    	$.ajax({
  			url: firstUrlWiki,
  			dataType: 'jsonp'
    	}).done(function(result) {
    		var wikiTitle = result.query.search[0].title;
       		var secondUrlWiki = urlWiki + '?' + $.param({
				'action': 'query',
				'format': 'json',
				'prop': 'extracts',
				'exintro': '',
				'explaintext': '',
				'indexpageids': '',
				'titles': wikiTitle
			});

    		$.ajax({
    			url: secondUrlWiki,
    			dataType: 'jsonp'
    		}).done(function(result) {
    			// Function to extract about the first several sentences of wiki information
    			$.each(result.query.pages, function(page) {

    				// Replace line breaks with spaces in extract for better iteration
    				var extract = this.extract.replace(/\n/g, ' ');

    				// Split string into sentences
    				var extracted = extract.split('. ');

    				var finalStringLength = 0;
    				var extractedIndex = 0;
    				wikiContent += '<p>';

    				// Compute length of extracted string and continue to iteratively add
    				// sentences while it is less than 300 characters long.
    				while (finalStringLength < 300) {
    					// If/else statement to prevent errors on Wiki extracts of less than
    					// 300 characters.
    					if (extracted[extractedIndex]) {
    						wikiContent += extracted[extractedIndex] + '. ';
    						extractedIndex++;
    						finalStringLength = wikiContent.length;
    					} else {
    						finalStringLength = 300;
    					}
    				}

    				// If statement to add additional sentence if period in 'St. ' causes
    				// termination of while loop mid-sentence.
    				if (wikiContent.slice(-4) === 'St. ') {
    					wikiContent += extracted[extractedIndex] + '. ';
    				}
    				wikiContent += '</p>';
    			});
    			wikiContentDiv.html(wikiContent);
    			clearTimeout(wikiRequestTimeout);
    		})
    	});
	};

	// Display function to open infoWindow when park listing item is clicked
	this.markerFocus = function(park) {
		self.infoWindowRender(map, park.associatedMarker, park);
	};

	// Initialize variable to store search strings
	this.searchTermsString = ko.observable('');

	// Search function to allow filtering by name input
	this.filterNames = function(element) {

		// Close InfoWindow, if open
		self.infoWindow.close();

		// Remove previous no match error message, if present
		if ($('#match-error').length) {
			$('#match-error').remove();
		}

		// Array to store matching parkList coordinates
		var matchingCoordinates = [];

		// Variable to check if match occurred
		var matchFound = false;

		// Perform name search and toggle display of non-matching park listings and markers
		var currentSearchString = self.searchTermsString().toLowerCase();
		self.parkList().forEach(function(park, index) {
			if (park.name().toLowerCase().search(currentSearchString) < 0) {
				park.shouldDisplay(false);
				park.associatedMarker.setMap(null);
			} else {
				matchingCoordinates.push(park.latLon);
				matchFound = true;
				park.shouldDisplay(true);
				park.associatedMarker.setMap(map);
			}
		});

		// Check to see if matches were found. If so, call function to change map bounds.
		// If no matches, display message.
		if (matchFound) {
			self.changeMapBounds(matchingCoordinates);
		} else {
			$('#park-list').append('<h3 id="match-error">No matches found</h3>');
		}
	};

	// Reset map to show all park listings and markers when reset button is clicked
	this.resetMap = function(element) {

		// Close InfoWindow, if open
		self.infoWindow.close();

		// Remove no match error message, if present
		if ($('#match-error').length) {
			$('#match-error').remove();
		}

		// Display all park listings and markers
		self.parkList().forEach(function(park) {
			park.shouldDisplay(true);
			park.associatedMarker.setMap(map);
		});

		// Remove prior search term(s) from box
		$('#search-box').val('');

		// Recenter map
		var latLng = new google.maps.LatLng(37.090, -91);
		map.panTo(latLng);
		map.setZoom(4);
	};

	// Function to filter map and markers by favorite status when 'Show Favorites'
	// button is clicked.
	this.filterFavorites = function(element) {

		// Close InfoWindow, if open
		self.infoWindow.close();

		// Remove previous no match error message, if present
		if ($('#match-error').length) {
			$('#match-error').remove();
		}

		// Array to store favorite parkList coordinates
		var favoriteCoordinates = [];

		// Variable to check if favorite(s) exist
		var favoriteFound = false;

		// Iterate through parks array. Call functions for toggling off display of
		// listings and markers of parks that are not favorited and toggling on display
		// of parks that are favorited.
		self.parkList().forEach(function(park, index) {
			if (!park.favorited()) {
				park.shouldDisplay(false);
				park.associatedMarker.setMap(null);
			} else {
				favoriteCoordinates.push(park.latLon);
				favoriteFound = true;
				park.shouldDisplay(true);
				park.associatedMarker.setMap(map);
			}
		});

		// Check to see if favorites were found. If so, call function to change map bounds.
		// If no favorites, display message.
		if (favoriteFound) {
			self.changeMapBounds(favoriteCoordinates);
		} else {
			$('#park-list').append('<h3 id="match-error">No favorites found</h3>');
		}
	}

	// Extend/change map bounds to best display markers after filter event
	this.changeMapBounds = function(data) {
		var bounds = new google.maps.LatLngBounds();
		for (var i = 0; i < data.length; i++) {
			var currentLatLng = new google.maps.LatLng(parseFloat(data[i].lat), parseFloat(data[i].lng));
			bounds.extend(currentLatLng);
		}
		map.fitBounds(bounds);
	};

	// Change favorite status of park
	this.toggleFavorite = function(park) {
		var newFavoriteStatus = !park.favorited();
		park.favorited(newFavoriteStatus);
	};

	window.addEventListener('load', self.initMap);
};

// Custom KnockOut binding to handle sliding of sidebar via adding or removing
// 'hidden-sidebar' class.
ko.bindingHandlers.slideVisible = {
	init: function(element, valueAccessor) {
		// Checks to see if small/medium mobile device is used and toggles
		// sidebar to closed.
		if ($(window).width() < 855) {
			$('#sidebar').toggleClass('hidden-sidebar');
			valueAccessor()(false);
		}
	},
	update: function(element, valueAccessor) {
		var value = valueAccessor()();
		if (value === true) {
			$('#sidebar').removeClass('hidden-sidebar');
		} else {
			$('#sidebar').addClass('hidden-sidebar');
		}
	}
};

ko.applyBindings(new ViewModel());