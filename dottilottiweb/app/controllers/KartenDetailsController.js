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
	            setKartenDetails(scope, "Dotti_Style_1", "Dotti_Style", "CHF 4.50");
	            break;
	        case "Dotti_Style_2":
	            setKartenDetails(scope, "Dotti_Style_2", "Dotti_Style", "CHF 4.50");
	            break;
	        case "Dotti_Style_3":
	            setKartenDetails(scope, "Dotti_Style_3", "Dotti_Style", "CHF 4.50");
	            break;
            case "Dotti_Style_4":
                setKartenDetails(scope, "Dotti_Style_4", "Dotti_Style", "CHF 4.50");
	            break;
            case "Dotti_Style_5":
                setKartenDetails(scope, "Dotti_Style_5", "Dotti_Style", "CHF 4.50");
	            break;

	        case "Mandala_Style_1":
	            setKartenDetails(scope, "Mandala_Style_1", "Mandala_Style", "CHF 4.50");
	            break;
	        case "Mandala_Style_2":
	            setKartenDetails(scope, "Mandala_Style_2", "Mandala_Style", "CHF 4.50");
	            break;
	        case "Mandala_Style_3":
	            setKartenDetails(scope, "Mandala_Style_3", "Mandala_Style", "CHF 4.50");
	            break;
	        case "Mandala_Style_4":
	            setKartenDetails(scope, "Mandala_Style_4", "Mandala_Style", "CHF 4.50");
	            break;
	        case "Mandala_Style_5":
	            setKartenDetails(scope, "Mandala_Style_5", "Mandala_Style", "CHF 4.50");
	            break;
	        case "Mandala_Style_6":
	            setKartenDetails(scope, "Mandala_Style_6", "Mandala_Style", "CHF 4.50");
	            break;
	        case "Mandala_Style_7":
	            setKartenDetails(scope, "Mandala_Style_7", "Mandala_Style", "CHF 4.50");
	            break;
	        case "Mandala_Style_8":
	            setKartenDetails(scope, "Mandala_Style_8", "Mandala_Style", "CHF 4.50");
	            break;

	        case "India_Style_1":
	            setKartenDetails(scope, "India_Style_1", "India_Style", "CHF 4.50");
	            break;
	        case "India_Style_2":
	            setKartenDetails(scope, "India_Style_2", "India_Style", "CHF 4.50");
	            break;
	        case "India_Style_3":
	            setKartenDetails(scope, "India_Style_3", "India_Style", "CHF 4.50");
	            break;
	        case "India_Style_4":
	            setKartenDetails(scope, "India_Style_4", "India_Style", "CHF 4.50");
	            break;
	        case "India_Style_5":
	            setKartenDetails(scope, "India_Style_5", "India_Style", "CHF 4.50");
	            break;
	        case "India_Style_6":
	            setKartenDetails(scope, "India_Style_6", "India_Style", "CHF 4.50");
	            break;
	        case "India_Style_7":
	            setKartenDetails(scope, "India_Style_7", "India_Style", "CHF 4.50");
	            break;
	        case "India_Style_8":
	            setKartenDetails(scope, "India_Style_8", "India_Style", "CHF 4.50");
	            break;
	        case "India_Style_9":
	            setKartenDetails(scope, "India_Style_9", "India_Style", "CHF 4.50");
	            break;
	        case "India_Style_10":
	            setKartenDetails(scope, "India_Style_10", "India_Style", "CHF 4.50");
	            break;
	        case "India_Style_11":
	            setKartenDetails(scope, "India_Style_11", "India_Style", "CHF 4.50");
	            break;
	        case "India_Style_12":
	            setKartenDetails(scope, "India_Style_12", "India_Style", "CHF 4.50");
	            break;
	        case "India_Style_13":
	            setKartenDetails(scope, "India_Style_13", "India_Style", "CHF 4.50");
	            break;
	        case "India_Style_14":
	            setKartenDetails(scope, "India_Style_14", "India_Style", "CHF 4.50");
	            break;


	    }

	};


	function setKartenDetails(scope, karte, kartenstyle, price) {
	    scope.karte = karte;
	    scope.kartenstyle = kartenstyle;
	    scope.price = price;
	    setKartenDetailsTitle(scope, karte, kartenstyle);
	    setArticleNumber(scope, karte);
	};
	
	function setKartenDetailsTitle(scope, karte, kartenstyle) {
	    if (kartenstyle == "Mandala_Style") {
	        scope.title = "Mandalakarten";
	    }
	    else if (kartenstyle == "Dotti_Style") {
	        scope.title = "Stoffkarte Dotti Style";
	    }
	    else if (kartenstyle == "India_Style") {
	        scope.title = "Stoffkarte India Style";
	    }    
	};

    function setArticleNumber(scope, karte) {
        scope.kartenArticleDesplay = karte.replace(/ /g, "_");
	}

})();
