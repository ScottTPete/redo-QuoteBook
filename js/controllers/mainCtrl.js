angular.module('quoteBook')
	.controller('mainCtrl', function($scope, dataSvc) {
		
	//runs the function so we get the quotes in storage available on scope
	dataSvc.getQuotesFromStorage();
	
	//sets or scope object quotes = to our array of quotes from service.
	$scope.quotes = dataSvc.getQuotes();

	
	
	$scope.addQuote = function(quote) {
		
		//call service function add quote and pass in object
		dataSvc.addQuote(quote);
		
		//updates scope
		dataSvc.getQuotes();
		
	};
	
	
	//takes in quotes array and the index of the quote you click on. 
	$scope.removeQuote = function(quotesArr, index) {
		//sends array and index to service
		dataSvc.removeQuote(quotesArr, index);
	};
	
	$scope.toggleFilter = function() {
		if ($scope.filterQuotes === "") {
			$scope.filterQuotes = $scope.searchQuotes
		} else {
			$scope.filterType = "";
		}
	};
	
	$scope.sortOrder = '+';  
	
	$scope.checkSort = function() {
		if($scope.sortOrder === "+") {
			return true;
		} else {
			return false;
		}
	};
	
})