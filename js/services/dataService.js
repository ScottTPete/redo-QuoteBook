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

	//if user is adding a quote make sure they have both text and author, if so add to quotes array. otherwise log an err message
	this.addQuote = function (quote) {
		if(quote.text && quote.author) {
			quotes.push(quote);
		} else {
			console.log("Quote couldn't be added. Make sure you have text and an author")
		}
	};

	//loop through quotes array and if the quote text is the same, remove quote at index. if not log err message
	this.removeQuote = function (quote) {
		
		quotes.splice(quote, 1);

		
		
	};
	
	
	
	
})