(function () {
	'use strict';

	var module = angular.module('mainApp');

	// this code can be used with uglify
	module.controller('KartenDetailsController',
		[
			'$scope',
			'$log',
            '$stateParams',
			KartenDetailsController
		]
	);

	function KartenDetailsController($scope, $log, $stateParams) {

	    getKartenDetails($scope, $stateParams.karte);
	}

	function getKartenDetails(scope, karte) {
	    switch (karte) {
	        case "Dotti_Style_2":
	            setKartenDetails(scope, "Dotti_Style_2", "Dotti_Style", "CHF 5.00");
	            break;

	    }

	};

	function setKartenDetails(scope, karte, kartenstyle, price) {
	    scope.karte = karte;
	    scope.kartenstyle = kartenstyle;
        scope.price = price
	};
	

})();
