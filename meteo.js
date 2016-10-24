(function(){
	var app = {
		init: function(){
			this.listeners();
		},

		listeners: function(){
			$('#weather').on('click', this.start.bind(this));
		},

		start: function(){
			var urlMeteo = 'http://api.openweathermap.org/data/2.5/weather?q=Toulouse,fr&appid=e05300d9bacf77c059ab39927fd4909d&units=metric';
			$.ajax(urlMeteo)
			.done()
			.fail()
			.always();
		},

		ajaxDone: function(){

		},

		ajaxFail: function(){
			console.log('Fail!');
		},

		ajaxAlways: function(){
			console.log('Always!');
		}
	}

	app.init();
})();