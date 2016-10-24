(function(){
    "use strict";

    var app = {

        init: function() {
            this.listeners();
        },

        listeners: function() {
            $("#btn").on("click", this.start.bind(this));
            $("#weather").on("click",this.meteo.bind(this));
        },

        start: function() {
            var url = "http://192.168.1.21:3000/places";
            $.ajax(url)
                .done(this.ajaxDone)
                .fail(this.ajaxFail)
                .always(this.ajaxAlways)    
        },

        ajaxDone: function(places) {
            var allPlaces = places.places;

            for (var i = 0; i < allPlaces.length; i++) {
                $("ul").append("<li>" + allPlaces[i].nom + "</li>")
            
                if (allPlaces[i].nom === "IoT Valley") {
                    $("#divPassword").html("Le mot de passe de l'IOT est :" + allPlaces[i].password);
                }
            }
        },
        ajaxFail:function(places){
            console.log("erreur");
        },
        ajaxAlways:function(places){
            console.log("complete");
        },

        meteo:function(){
    location: 'Austin, TX',
    woeid: '',
    unit: 'f',

    success: function(weather) {
      html = '<h2><i class="icon-'+weather.code+'"></i> '+weather.temp+'&deg;'+weather.units.temp+'</h2>';
      html += '<ul><li>'+weather.city+', '+weather.region+'</li>';
      html += '<li class="currently">'+weather.currently+'</li>';
      html += '<li>'+weather.wind.direction+' '+weather.wind.speed+' '+weather.units.speed+'</li></ul>';
  
      $("#weather").html(html);
    },
    error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
    },
  });

        };
    }

    app.init();

})();