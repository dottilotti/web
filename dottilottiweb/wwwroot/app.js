!function(){var a=angular.module("mainApp",["ui.router"]);a.config(["$stateProvider","$urlRouterProvider",function(a,b){b.otherwise("/home"),a.state("home",{url:"/home",templateUrl:"/templates/home.html"}).state("team",{url:"/team",templateUrl:"/templates/team.html"}).state("kontakt",{url:"/kontakt",templateUrl:"/templates/kontakt.html"}).state("karten",{url:"/karten",templateUrl:"/templates/karten.html"})}])}();