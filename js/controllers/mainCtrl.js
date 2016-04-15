angular.module('quoteBook')
	.controller('mainCtrl', function($scope, dataSvc) {
		
	
	$scope.quotes = dataSvc.getQuotes();
	
	
	$scope.addQuote = function() {
	//create an object with properties of text and author(Req by service). bound to inputs on view using ng-model
		$scope.quote = {
			text: $scope.quote.text,
			author: $scope.quote.author
		}
		
		//call service function add quote and pass in object
		dataSvc.addQuote($scope.quote);
		
		//updates scope
		dataSvc.getQuotes();
		
	};
	
	$scope.removeQuote = function(quote) {
		dataSvc.removeQuote(quote);
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
	]
	 
	
})