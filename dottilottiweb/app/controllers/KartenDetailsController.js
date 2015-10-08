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
	        case "Dotti_Style_1":
	            setKartenDetails(scope, "Dotti_Style_1", "Dotti_Style", "CHF 5.00");
	            break;
	        case "Dotti_Style_2":
	            setKartenDetails(scope, "Dotti_Style_2", "Dotti_Style", "CHF 77.00");
	            break;
	        case "Dotti_Style_3":
	            setKartenDetails(scope, "Dotti_Style_3", "Dotti_Style", "CHF 3.00");
	            break;
            case "Dotti_Style_4":
	            setKartenDetails(scope, "Dotti_Style_4", "Dotti_Style", "CHF 59.00");
	            break;
            case "Dotti_Style_5":
	            setKartenDetails(scope, "Dotti_Style_5", "Dotti_Style", "CHF 34.00");
	            break;

	        case "Mandala_Style_1":
	            setKartenDetails(scope, "Mandala_Style_1", "Dotti_Style", "CHF 1.00");
	            break;
	        case "Mandala_Style_2":
	            setKartenDetails(scope, "Mandala_Style_2", "Dotti_Style", "CHF 1.00");
	            break;
	        case "Mandala_Style_3":
	            setKartenDetails(scope, "Mandala_Style_3", "Dotti_Style", "CHF 1.00");
	            break;
	        case "Mandala_Style_4":
	            setKartenDetails(scope, "Mandala_Style_4", "Dotti_Style", "CHF 1.00");
	            break;
	        case "Mandala_Style_5":
	            setKartenDetails(scope, "Mandala_Style_5", "Dotti_Style", "CHF 1.00");
	            break;
	        case "Mandala_Style_6":
	            setKartenDetails(scope, "Mandala_Style_6", "Dotti_Style", "CHF 1.00");
	            break;
	        case "Mandala_Style_7":
	            setKartenDetails(scope, "Mandala_Style_7", "Dotti_Style", "CHF 1.00");
	            break;
	        case "Mandala_Style_8":
	            setKartenDetails(scope, "Mandala_Style_8", "Dotti_Style", "CHF 1.00");
	            break;

	        case "India_Style_1":
	            setKartenDetails(scope, "India_Style_1", "Dotti_Style", "CHF 2.00");
	            break;
	        case "India_Style_2":
	            setKartenDetails(scope, "India_Style_2", "Dotti_Style", "CHF 2.00");
	            break;
	        case "India_Style_3":
	            setKartenDetails(scope, "India_Style_3", "Dotti_Style", "CHF 2.00");
	            break;
	        case "India_Style_4":
	            setKartenDetails(scope, "India_Style_4", "Dotti_Style", "CHF 2.00");
	            break;
	        case "India_Style_5":
	            setKartenDetails(scope, "India_Style_5", "Dotti_Style", "CHF 2.00");
	            break;
	        case "India_Style_6":
	            setKartenDetails(scope, "India_Style_6", "Dotti_Style", "CHF 2.00");
	            break;
	        case "India_Style_7":
	            setKartenDetails(scope, "India_Style_7", "Dotti_Style", "CHF 2.00");
	            break;
	        case "India_Style_8":
	            setKartenDetails(scope, "India_Style_8", "Dotti_Style", "CHF 2.00");
	            break;
	        case "India_Style_9":
	            setKartenDetails(scope, "India_Style_9", "Dotti_Style", "CHF 2.00");
	            break;
	        case "India_Style_10":
	            setKartenDetails(scope, "India_Style_10", "Dotti_Style", "CHF 2.00");
	            break;
	        case "India_Style_11":
	            setKartenDetails(scope, "India_Style_11", "Dotti_Style", "CHF 2.00");
	            break;
	        case "India_Style_12":
	            setKartenDetails(scope, "India_Style_12", "Dotti_Style", "CHF 2.00");
	            break;
	        case "India_Style_13":
	            setKartenDetails(scope, "India_Style_13", "Dotti_Style", "CHF 2.00");
	            break;
	        case "India_Style_14":
	            setKartenDetails(scope, "India_Style_14", "Dotti_Style", "CHF 2.00");
	            break;


	    }

	};

	function setKartenDetails(scope, karte, kartenstyle, price) {
	    scope.karte = karte;
	    scope.kartenstyle = kartenstyle;
        scope.price = price
	};
	

})();
