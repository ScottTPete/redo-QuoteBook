angular.module('quoteBook')
	.service('dataSvc', function() {
	
	
	//if user is adding a quote make sure they have both text and author, if so add to quotes array. otherwise log an err message
	this.saveQuote = function (quote) {
		
		
		console.log(quote)
		
		 if(!localStorage.getItem('quotes')) {
			 
			 localStorage.setItem('quotes', JSON.stringify(quote));
			 
		 } else if (localStorage.getItem('quotes')) {
			 
			 var updatedArr = JSON.parse(localStorage.getItem('quotes'));

			 updatedArr.push({text: quote.text, author: quote.author});

			 console.log(localStorage.setItem('quotes', 
											  JSON.stringify(updatedArr)))

			 localStorage.setItem('quotes', JSON.stringify(updatedArr));

		 } else {
			 console.log('Failed to save quote to local storage');
		 }
	};

	this.checkForQuotes = function () {
		
		if(localStorage.getItem('quotes')) {
			
			console.log(localStorage.getItem('quotes'))
			
			return JSON.parse(localStorage.getItem('quotes'));
		
		} else {
			
			console.log('No quotes in your quote book')
			
		}
		
	};
	
	

	//loop through quotes array and if the quote text is the same, remove quote at index. if not log err message
	this.removeQuote = function (quote) {
		
		

		
		
	};
	
	
	
	
})