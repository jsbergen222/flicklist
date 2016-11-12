

var model = {
  watchlistItems: [],
  browseItems: []
}


var api = {
  root: "https://api.themoviedb.org/3",
  token: "87d89575cd9f3f8dfdd1f38c8d1f2dac" // TODO 0 put your api key here
}


/**
 * Makes an AJAX request to themoviedb.org, asking for some movies
 * if successful, updates the model.browseItems appropriately, and then invokes
 * the callback function that was passed in
 */
// When the document is loaded, we execute discoverMovies(render),
// which invokes discoverMovies and passes in something called render as the callback.
// We're saying: Go fetch some results from the API, and when you get a response back, invoke this other function called render. 
 
function discoverMovies(callback) {
	$.ajax({
		url: api.root + "/discover/movie",
		data: {
			api_key: api.token,
		},
		success: function(response) {
			console.log("We got a response from The Movie DB!");
			//console.log(response.results[1].original_title);				//added for debugging;
			
			// TODO 2
			// update the model, setting its .browseItems property equal to the movies we recieved in the response
			model.browseItems = response.results;
			
			
			
			console.log(model.browseItems[1]);													// added for debugging;
			//var cnt = model.browseItems.length;											// added for debugging;
			//for(i=0;i<cnt;i++)																			// added for debugging;
			//{		console.log(model.browseItems[i].original_title);		// added for debugging;
			//}

			callback();
		}
	});
  
}


/**
 * re-renders the page with new content, based on the current state of the model
 */
function render() {
  // TODO 7
  // clear everything from both lists
  	//model.browseItems = [];
  	//model.watchlistItems = [];
  
  // for each movie on the current browse list, 
  model.browseItems.forEach(function(movie)
  {	// TODO 3 & 4
		// 3. insert a list item into the <ul> in the browse section
		// 4. the list item should include a button that says "Add to Watchlist"
		//$("#section-browse ul").append("<li><p>Dr. Strange</p><button>Add to Watchlist</button></li>");		//this works;
		//$("#section-browse ul").append("<li><p>"+movie.original_title+"</p><button id='btn'>Add to Watchlist</button></li>"); //works better
		$("#section-browse ul").append("<li><p>"+movie.original_title+"</p></li>");
		var myButton = $("<button></button>").text("Add to Watchlist");	//.id(movie.original_title);
		$("#section-browse ul").append(myButton);

  // for each movie on the current watch list, 
  // model.watchlistItems.forEach(function(movie)
  // {	$("#section-watchlist ul").append("<li><p>"+movie.original_title+"</p></li>");


		// TODO 5, 6, & 7
		// 5. when the button is clicked, this movie should be added to the model's watchlist and render() should be called again
		// 6. for each movie on the user's watchlist, insert a list item into the <ul> in the watchlist section
		myButton.click(function()
			{	// console.log("You clicked my button!"); debugging;
				//model.watchlistItems.empty();
				model.watchlistItems.push(movie);
				//console.log(movie.original_title);
				//console.log(model.watchlistItems);
				model.watchlistItems.forEach(function(movie)
				{	$("#section-watchlist ul").append("<li><p>"+movie.original_title+"</p>");
				});
				//$("#section-watchlist ul").append("<li><p>"+movie.original_title+"</p>");
				 model.watchlistItems = []; 		// works;
				 model.browseItems = [];				// works;
			});
  	});
  
}


// When the HTML document is ready, we call the discoverMovies() function,
// and pass the render() function as its callback
$(document).ready(function() {
  discoverMovies(render);
});

