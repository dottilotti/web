﻿(function () {
    var mainApp = angular.module("mainApp", ["ui.router", "slick"]);

	mainApp.config(["$stateProvider", "$urlRouterProvider",
		function ($stateProvider, $urlRouterProvider) {
            	$urlRouterProvider.otherwise("home");

            	$stateProvider
                    .state("home", { url: "/home", templateUrl:  "templates/home.html" })
                    .state("team", { url: "/team", templateUrl: "templates/team.html" })
                    .state("kontakt", { url: "/kontakt", templateUrl: "templates/kontakt.html" })
                    .state("karten", { url: "/karten", templateUrl: "templates/karten.html" })
                    .state("kartendetails", { url: "/kartendetails/:karte", templateUrl: "templates/kartendetails.html", controller: "KartenDetailsController" })
                    .state("kartendetailsmandala", { url: "/kartendetailsmandala/:karte", templateUrl: "templates/kartendetailsmandala.html", controller: "KartenDetailsController" })
        }
	]
    );
})();
