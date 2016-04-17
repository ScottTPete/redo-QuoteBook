angular.module('quoteBook')
	.controller('mainCtrl', function($scope, dataSvc) {
		
	
	dataSvc.getQuotesFromStorage();
	
	$scope.quotes = dataSvc.getQuotes();
//	$scope.filterType = '';
	
	
	$scope.addQuote = function(quote) {
		
		//call service function add quote and pass in object
		dataSvc.addQuote(quote);
		
		//updates scope
		dataSvc.getQuotes();
		
	};
	
	$scope.removeQuote = function(quotesArr, index) {
		dataSvc.removeQuote(quotesArr, index);
	}
	
	/*$scope.toggleFilter = function() {
		if ($scope.filterType === "") {
			$scope.filterType = $scope.quote
		} else {
			$scope.filterType = "";
		}
	}
	 */
	
})