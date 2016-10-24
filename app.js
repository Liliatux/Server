(function(){
	'use strict';

	var app = {

		init: function() {
			this.listeners();
		},

		listeners: function() {
			$('button').on('click', this.start.bind(this));
		},

		start: function() {
			var url = 'http://192.168.1.21:3000/places';
			$.ajax(url)
				.done(app.ajaxDone)
				.fail(app.ajaxFail)
				.always(app.ajaxAlways)	
		},

		ajaxDone: function(places) {
			console.log(places);
			var allPlaces = places.places;
			console.log(allPlaces);
			for (var i = 0; i < allPlaces.length; i++) {
				$("ul").append("<li>" + allPlaces[i].nom + "</li>")
			
				if (allPlaces[i].nom === "IoT Valley") {
					$("span").html(allPlaces[i].password);
				}
			}
		}

	}

	app.init();
	
})();