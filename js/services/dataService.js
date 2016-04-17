angular.module('quoteBook')
	.service('dataSvc', function () {
	

		//This creates an array around our 'quotes' key in localstorage. Local storage an only take strings so we are converting our Object to a string.
				var quoteList = [];
				quoteList.push(JSON.parse(localStorage.getItem('quotes')));
				localStorage.setItem('quotes', JSON.stringify(quoteList));
		//////////////////////////////////////////////////////////

		this.getQuotes = function () {
			if (localStorage['quotes']) {
				return JSON.parse(localStorage.getItem('quotes'))
			} else {
				alert('You have no quotes in your quote!')
			}
		};

		this.addQuote = function (quote) {

			console.log(quote)

			//check if a quotes key doesnt exist in local storage and that the user has filled out the both quote and author. If true create a new quotes key and give it a value of the quote.
			if (!localStorage.getItem('quotes') && quote.hasOwnProperty('text') && quote.hasOwnProperty('author')) {

				//turns quote object into a string so local storage can read it.
				localStorage.setItem('quotes', JSON.stringify(quote));

				//if quotes key exists in storage and user passed in both author and quote. push that quote to storage array as atring
			} else if (quote.hasOwnProperty('text') && quote.hasOwnProperty('author')) {

				quoteList = JSON.parse(localStorage.getItem('quotes'))

				quoteList.push(quote);

				localStorage.setItem('quotes', JSON.stringify(quoteList));


				//if no author or no quote was submitted alert user his save attempt failed 		
			} else {

				alert("Couldn't save the quote. Make sure you have filled out both the quote and the author.")
			}
			console.log(localStorage['quotes']);
		};


		this.removeQuote = function (quote) {

			localStorage.removeItem('quotes', quote)



		};




	})