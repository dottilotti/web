!function(){var a=angular.module("mainApp",["ui.router","slick"]);a.config(["$stateProvider","$urlRouterProvider",function(a,b){b.otherwise("home"),a.state("home",{url:"/home",templateUrl:"templates/home.html"}).state("team",{url:"/team",templateUrl:"templates/team.html"}).state("kontakt",{url:"/kontakt",templateUrl:"templates/kontakt.html"}).state("karten",{url:"/karten",templateUrl:"templates/karten.html"}).state("kartendetails",{url:"/kartendetails/:karte",templateUrl:"templates/kartendetails.html",controller:"KartenDetailsController"})}])}(),function(){"use strict";function a(a,c,d){b(a,d.karte)}function b(a,b){switch(b){case"Dotti_Style_1":c(a,"Dotti_Style_1","Dotti_Style","CHF 5.00");break;case"Dotti_Style_2":c(a,"Dotti_Style_2","Dotti_Style","CHF 77.00");break;case"Dotti_Style_3":c(a,"Dotti_Style_3","Dotti_Style","CHF 3.00");break;case"Dotti_Style_4":c(a,"Dotti_Style_4","Dotti_Style","CHF 59.00");break;case"Dotti_Style_5":c(a,"Dotti_Style_5","Dotti_Style","CHF 34.00");break;case"Mandala_Style_1":c(a,"Mandala_Style_1","Mandala_Style","CHF 1.00");break;case"Mandala_Style_2":c(a,"Mandala_Style_2","Mandala_Style","CHF 1.00");break;case"Mandala_Style_3":c(a,"Mandala_Style_3","Mandala_Style","CHF 1.00");break;case"Mandala_Style_4":c(a,"Mandala_Style_4","Mandala_Style","CHF 1.00");break;case"Mandala_Style_5":c(a,"Mandala_Style_5","Mandala_Style","CHF 1.00");break;case"Mandala_Style_6":c(a,"Mandala_Style_6","Mandala_Style","CHF 1.00");break;case"Mandala_Style_7":c(a,"Mandala_Style_7","Mandala_Style","CHF 1.00");break;case"Mandala_Style_8":c(a,"Mandala_Style_8","Mandala_Style","CHF 1.00");break;case"India_Style_1":c(a,"India_Style_1","India_Style","CHF 2.00");break;case"India_Style_2":c(a,"India_Style_2","India_Style","CHF 2.00");break;case"India_Style_3":c(a,"India_Style_3","India_Style","CHF 2.00");break;case"India_Style_4":c(a,"India_Style_4","India_Style","CHF 2.00");break;case"India_Style_5":c(a,"India_Style_5","India_Style","CHF 2.00");break;case"India_Style_6":c(a,"India_Style_6","India_Style","CHF 2.00");break;case"India_Style_7":c(a,"India_Style_7","India_Style","CHF 2.00");break;case"India_Style_8":c(a,"India_Style_8","India_Style","CHF 2.00");break;case"India_Style_9":c(a,"India_Style_9","India_Style","CHF 2.00");break;case"India_Style_10":c(a,"India_Style_10","India_Style","CHF 2.00");break;case"India_Style_11":c(a,"India_Style_11","India_Style","CHF 2.00");break;case"India_Style_12":c(a,"India_Style_12","India_Style","CHF 2.00");break;case"India_Style_13":c(a,"India_Style_13","India_Style","CHF 2.00");break;case"India_Style_14":c(a,"India_Style_14","India_Style","CHF 2.00")}}function c(a,b,c,d){a.karte=b,a.kartenstyle=c,a.price=d}var d=angular.module("mainApp");d.controller("KartenDetailsController",["$scope","$log","$stateParams",a])}();