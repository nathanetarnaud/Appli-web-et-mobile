var todoApp=angular.module('todoApp', []);
todoApp.controller('TodoCtrl', ['$scope', function($scope)
{
	$scope.tab=[];

	$scope.ajouter=function()
	{
		var o = new Object();
		o.task = $scope.task;
		o.barre = false;
		o.surligne = false;
		$scope.tab.push(o);
		$scope.task = '';
	};

	$scope.delete=function(idx)
	{
		$scope.tab.splice(idx, 1);
	};

	$scope.barrer=function(idx)
	{
		$scope.tab[idx].barre = !$scope.tab[idx].barre;
	};

	$scope.surligner=function(idx)
	{
		$scope.tab[idx].surligne = !$scope.tab[idx].surligne;
	};

}]);
