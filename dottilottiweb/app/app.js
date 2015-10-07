(function () {
    var mainApp = angular.module("mainApp", ["ui.router", "slick"]);

	mainApp.config(["$stateProvider", "$urlRouterProvider",
		function ($stateProvider, $urlRouterProvider) {
            	$urlRouterProvider.otherwise("home");

            	$stateProvider
                    .state("home", { url: "/home", templateUrl:  "templates/home.html" })
                    .state("team", { url: "/team", templateUrl: "templates/team.html" })
                    .state("kontakt", { url: "/kontakt", templateUrl: "templates/kontakt.html" })
                    .state("karten", { url: "/karten", templateUrl:  "templates/karten.html" })
        }
	]
    );
})();
