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
	            setKartenDetails(scope, "Dotti_Style_1", "Dotti_Style", "CHF 4.50", 101, "Stoffkarte Dotti Style");
	            break;
	        case "Dotti_Style_2":
	            setKartenDetails(scope, "Dotti_Style_2", "Dotti_Style", "CHF 4.50", 102, "Stoffkarte Dotti Style");
	            break;
	        case "Dotti_Style_3":
	            setKartenDetails(scope, "Dotti_Style_3", "Dotti_Style", "CHF 4.50", 103, "Stoffkarte Dotti Style");
	            break;
            case "Dotti_Style_4":
                setKartenDetails(scope, "Dotti_Style_4", "Dotti_Style", "CHF 4.50", 104, "Stoffkarte Dotti Style");
	            break;
            case "Dotti_Style_5":
                setKartenDetails(scope, "Dotti_Style_5", "Dotti_Style", "CHF 4.50", 105, "Stoffkarte Dotti Style");
	            break;

	        case "Mandala_Style_1":
	            setKartenDetails(scope, "Mandala_Style_1", "Mandala_Style", "Set CHF 3.80", 201, "Mandalakarten");
	            break;
	        case "Mandala_Style_2":
	            setKartenDetails(scope, "Mandala_Style_2", "Mandala_Style", "Set CHF 3.80", 202, "Mandalakarten");
	            break;
	        case "Mandala_Style_3":
	            setKartenDetails(scope, "Mandala_Style_3", "Mandala_Style", "Set CHF 3.80", 203, "Mandalakarten");
	            break;
	        case "Mandala_Style_4":
	            setKartenDetails(scope, "Mandala_Style_4", "Mandala_Style", "Set CHF 3.80", 204, "Mandalakarten");
	            break;
	        case "Mandala_Style_5":
	            setKartenDetails(scope, "Mandala_Style_5", "Mandala_Style", "Set CHF 3.80", 205, "Mandalakarten");
	            break;
	        case "Mandala_Style_6":
	            setKartenDetails(scope, "Mandala_Style_6", "Mandala_Style", "Set CHF 3.80", 206, "Mandalakarten");
	            break;
	        case "Mandala_Style_7":
	            setKartenDetails(scope, "Mandala_Style_7", "Mandala_Style", "Set CHF 3.80", 207, "Mandalakarten");
	            break;
	        case "Mandala_Style_8":
	            setKartenDetails(scope, "Mandala_Style_8", "Mandala_Style", "Set CHF 3.80", 208, "Mandalakarten");
	            break;

	        case "India_Style_1":
	            setKartenDetails(scope, "India_Style_1", "India_Style", "CHF 4.50", 301, "Stoffkarte Grün-Blau mit Bordüre");
	            break;
	        case "India_Style_2":
	            setKartenDetails(scope, "India_Style_2", "India_Style", "CHF 4.50", 302, "Stoffkarte Blümchen mit Glitzersteinchen");
	            break;
	        case "India_Style_3":
	            setKartenDetails(scope, "India_Style_3", "India_Style", "CHF 4.50", 303, "Stoffkarte Braun mit Bordüre");
	            break;
	        case "India_Style_4":
	            setKartenDetails(scope, "India_Style_4", "India_Style", "CHF 4.50", 304, "Stoffkarte Gelb mit Glitzersteinchen");
	            break;
	        case "India_Style_5":
	            setKartenDetails(scope, "India_Style_5", "India_Style", "CHF 4.50", 305, "Stoffkarte Pink mit Bordüre");
	            break;
	        case "India_Style_6":
	            setKartenDetails(scope, "India_Style_6", "India_Style", "CHF 4.50", 306, "Stoffkarte Blümchen Blau-Pink");
	            break;
	        case "India_Style_7":
	            setKartenDetails(scope, "India_Style_7", "India_Style", "CHF 4.50", 307, "Stoffkarte Orange mit Glitzersteinchen");
	            break;
	        case "India_Style_8":
	            setKartenDetails(scope, "India_Style_8", "India_Style", "CHF 4.50", 308, "Stoffkarte Grün mit Glitzersteinchen");
	            break;
	        case "India_Style_9":
	            setKartenDetails(scope, "India_Style_9", "India_Style", "CHF 4.50", 309, "Stoffkarte Blaue Punkte mit Glitzersteinchen");
	            break;
	        case "India_Style_10":
	            setKartenDetails(scope, "India_Style_10", "India_Style", "CHF 4.50", 310, "Stoffkarte Rosa Punkte mit Glitzersteinchen");
	            break;
	        case "India_Style_11":
	            setKartenDetails(scope, "India_Style_11", "India_Style", "CHF 4.50", 311, "Stoffkarte Pink-Orange mit Glitzersteinchen");
	            break;
	        case "India_Style_12":
	            setKartenDetails(scope, "India_Style_12", "India_Style", "CHF 4.50", 312, "Stoffkarte Blau mit Bordüre");
	            break;
	        case "India_Style_13":
	            setKartenDetails(scope, "India_Style_13", "India_Style", "CHF 4.50", 313, "Stoffkarte Blümchen Pink mit Glitzersteinchen");
	            break;
	        case "India_Style_14":
	            setKartenDetails(scope, "India_Style_14", "India_Style", "CHF 4.50", 314, "Stoffkarte Blümchen Blau mit Glitzersteinchen");
	            break;


	    }

	};

	function setKartenDetails(scope, karte, kartenstyle, price, articleNummer, title) {
	    scope.karte = karte;
	    scope.kartenstyle = kartenstyle;
	    scope.price = price;
	    setKartenDetailsTitle(scope, karte, kartenstyle);
	    scope.kartenArticleDesplay = articleNummer;
	    scope.title = title;
	};
	
	function setKartenDetailsTitle(scope, karte, kartenstyle) {
	    if (kartenstyle == "Mandala_Style") {
	        scope.setprice = "Ab 10 Sets 2.80 | Ab 100 Sets 1.80";
	    }
	    else if (kartenstyle == "Dotti_Style") {
	        scope.setprice = "Ab 10 Karten 3.50 | Ab 100 Karten 2.50";
	    }
	    else if (kartenstyle == "India_Style") {	       
	        scope.setprice = "Ab 10 Karten 3.50 | Ab 100 Karten 2.50";
	        scope.detailsTwo = "(Verschiedene Karten-Sujets gemischt auch möglich)";
	    }    
	};


})();
