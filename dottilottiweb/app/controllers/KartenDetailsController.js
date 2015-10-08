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

	    $scope.karte = $stateParams.karte;
	    $scope.kartenstyle = $stateParams.kartenstyle;

	}

})();
