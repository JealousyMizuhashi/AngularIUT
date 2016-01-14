angular.module("myApp", []);

angular.module("myApp").controller("controller1", function($scope, $log) {
	$log.info("controller1 init ...");
	$scope.message = "Ceci est un texte qui s'affiche de base";
});

angular.module("myApp").controller("controller2", function($scope, $log) {
	$log.info("controller2 init ...");
	MyCtrl($scope)
});

angular.module("myApp").controller("controller3", function($scope, $log) {
	$log.info("controller3 init ...");
	$scope.message2 = "Si vous me voyez, c'est que le bouton fonctionne. Bravo !";
});

function MyCtrl($scope) {
  $scope.visible = false;
$scope.messageBouton = "Cliquez ici pour voir quelque-chose de formidable !";
  $scope.toggle = function() {
    $scope.visible = !$scope.visible;
  };
}
