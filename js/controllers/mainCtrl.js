angular.module('quoteBook')
	.controller('mainCtrl', function($scope, dataSvc) {
		
	
	$scope.quotes = dataSvc.getQuotes();
	
	
	$scope.addQuote = function(quote) {
		
		//pass quote to service
		dataSvc.addQuote(quote);
		
		//update scope
		dataSvc.getQuotes();
		
	}
	
	$scope.sortOptions = [
		{
			name: "Ascending",
			value: false
		}, 
		{
			name: "Descending",
			value: true
		}
	];
	
	$scope.removeQuote = function(quote) {
		dataSvc.removeQuote(quote);
	}
	 
	
})