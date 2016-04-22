

var model = {
  watchlistItems: [],
  browseItems: []
}


var api = {
  root: "https://api.themoviedb.org/3",
  token: "8e888fa39ec243e662e1fb738c42ae99"
}


/**
 * Makes an AJAX request to themoviedb.org, asking for some movies
 * if successful, updates the model.browseItems appropriately, and then invokes
 * the callback function that was passed in
 */
function discoverMovies(callback) {
	$.ajax({
		url: api.root + "/discover/movie",
		data: {
			api_key: api.token,
		},
		success: function(response) {
			console.log("We got a response from The Movie DB!");
			console.log(response);
			
			// TODO 1
			// update the model, setting its .browseItems property equal to the movies we recieved in the response
			
			// invoke the callback function that was passed in. 
			callback();
		}
	});
  
}


/**
 * re-renders the page with new content, based on the current state of the model
 */
function render() {
  // TODO 4
  // clear everything from both lists
  
  // TODO 3
  // for each movie on the user's watchlist, insert a list item into the <ul> in the watchlist section
  
  // for each movie on the current browse list, 
  model.browseItems.forEach(function(movie) {
  	// TODO 2
  	// insert a list item into the <ul> in the browse section
	  
	  // TODO 5
	  // the list item should include a button, that, when clicked, adds the movie to the watchlist and re-renders
  });
  
}


// When the HTML document is ready, we call the discoverMovies function,
// and pass the render function as its callback
$(document).ready(function() {
  discoverMovies(render);
});

