angular.module('quoteBook')
	.service('dataSvc', function() {
	
	var quotes = [
		{ text: 'Life isn\'t about getting and having, it\'s about giving and being.', author: 'Kevin Kruse'},
		{ text: 'Whatever the mind of man can conceive and believe, it can achieve', author: 'Napoleon Hill'},
		{ text: 'Strive not to be a success, but rather to be of value.', author: 'Albert Einstein'},
		{ text: 'Two roads diverged in a wood, and I took the one less traveled by, And that has made all the difference.', author: 'Robert Frost'},
		{ text: 'The most difficult thing is the decision to act, the rest is merely tenacity.', author: 'Amelia Earhart'},
		{ text: 'Life is what happens to you while you\'re busy making other plans.', author: 'John Lennon'},
		{ text: 'What even is a jQuery?', author: 'Tyler S. McGinnis'}
	];

	this.getQuotes = function () {
		return quotes;
	};

	
	//if user submitted both quote and author push that quote to the quotes array. 
	this.addQuote = function (quote) {
		if(quote.text && quote.author) {
			quotes.push(quote);
			
			//runs that function to add new quote to local storage.
			updateQuotesStorage()
			
			console.log(localStorage['quotes'])
		} else {
			//alerts if user didn't have both quote and author.
			alert("Quote couldn't be added. Make sure you have text and an author");
		}
	};
	
	function updateQuotesStorage () {
		localStorage.setItem('quotes', JSON.stringify(quotes))
	};
	
	this.getQuotesFromStorage = function () {
		if(localStorage['quotes']) {
			quotes = JSON.parse(localStorage['quotes'])
		} else {
			localStorage.setItem('quotes', JSON.stringify(quotes));
		}
	}

	//if user clicks remove, removes the quote at that index.
	this.removeQuote = function (quotesArr, index) {
		console.log(quotesArr[index]);
		quotesArr.splice(index, 1);
		updateQuotesStorage();
		
		console.log(localStorage['quotes'])

		
		
	};
	
	
	
	
})