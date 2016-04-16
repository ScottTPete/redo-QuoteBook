angular.module('quoteBook')
	.controller('mainCtrl', function($scope, dataSvc) {
		
	$scope.quotes = dataSvc.checkForQuotes();
	
	$scope.saveQuote = function(quote) {
		//create an object with properties of text and author(Req by service). bound to inputs on view using ng-model
	/*	$scope.quote = {
			text: $scope.quote.text,
			author: $scope.quote.author
		}*/

		//call service function add quote and pass in object
		console.log(quote);
		dataSvc.saveQuote(quote);

		//updates scope
		dataSvc.checkForQuotes();

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