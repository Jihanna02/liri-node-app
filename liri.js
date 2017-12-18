var keys = require('./keys.js');

    var argOne = process.argv[2];
	//options:
		//my-tweets
		//spotify-this-song 
		//movie-this
	var argTwo = process.argv[3];
	//options:
		//'<song name here>'
		//'<movie name here>'

	if (argOne === "my-tweets") {
		//ajax call to display tweets
		var twitterAPI = require('node-twitter-api');
		var twitter = new twitterAPI({
	    consumerKey: keys.consumer_key,
	    consumerSecret: keys.consumer_secret,
	    callback: 'http://www.google.com'
		});

		twitter.search({'q': 'jihanna02', 'count':"20"},
		    keys.access_token_key,
		    keys.access_token_secret,
		    function(error, data, response) {
		        if (error) {
		            console.log("error alert");
		        } else {

		        	for(var i = 0; i < data.statuses.length; i++){
		        		console.log(data.statuses[i].text); 
		        	}
		        }
		    }
		);

 	} else if (argOne === "spotify-this-song") {

 		console.log("selected spotify-this-song (with value)");

		// if (argTwo != undefined ) {
		// 	// ajax call to spotify with argTwo song title

		// 	// Artist(s)
		//  	//The song's name
		//  	//A preview link of the song from Spotify
		//  	//The album that the song is from

		//  	console.log("selected spotify-this-song (with value)");

		// } else {
		// 	// ajax call to spotify with "The Sign" by Ace of Base
		// 	console.log("selected spotify-this-song (undefined)");
		// }
		
	} else if (argOne === "movie-this") {

		console.log("selected movie-this (undefined)");

		// if (argTwo != undefined ) {
		// 	// ajax call to OMDB with argTwo movie title

		// 	// Title of the movie.
		// 	//Year the movie came out.
		// 	//IMDB Rating of the movie.
		// 	//Rotten Tomatoes Rating of the movie.
		// 	//Country where the movie was produced.
		// 	//Language of the movie.
		// 	//Plot of the movie.
		// 	//Actors in the movie.

		// 	console.log("selected movie-this (with value)");

		// } else {
		// 	//output data for the movie 'Mr. Nobody.'

		// 	console.log("selected movie-this (undefined)");
		// }
		

	}


// };
