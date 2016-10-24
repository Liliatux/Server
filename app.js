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
            var urlPlace = "http://192.168.1.21:3000/places";
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
        }

    }  

    app.init();

})();