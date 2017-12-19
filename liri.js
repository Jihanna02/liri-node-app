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
	    consumerKey: keys.twitterKeys.consumer_key,
	    consumerSecret: keys.twitterKeys.consumer_secret,
	    callback: 'http://www.google.com'
		});

		twitter.search({'q': 'jihanna02', 'count':"20"},
		    keys.twitterKeys.access_token_key,
		    keys.twitterKeys.access_token_secret,
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

 		var Spotify = require('node-spotify-api');
 
		var spotify = new Spotify({
		  id: keys.spotifyKeys.client_Id,
		  secret: keys.spotifyKeys.client_secret
		});

 		if (argTwo != undefined ) {
			// ajax call to spotify with argTwo song title


			spotify.search({ type: 'track', 
				query: argTwo,
				limit: 1 }, function(err, data) {
			  if (err) {
			    return console.log('Error occurred: ' + err);
			  }
			 
				console.log("Artist: " + data.tracks.items[0].artists[0].name);
				console.log("Song Title: " + data.tracks.items[0].name);
				console.log("Album: " + data.tracks.items[0].album.name);
				console.log("Song Preview: " + data.tracks.items[0].preview_url); 
			});

		} else {

			spotify.search({ type: 'track', 
				query: 'the sign',
				limit: 1 }, function(err, data) {
			  if (err) {
			    return console.log('Error occurred: ' + err);
			  }
			 
				console.log("Artist: " + data.tracks.items[0].artists[0].name);
				console.log("Song Title: " + data.tracks.items[0].name);
				console.log("Album: " + data.tracks.items[0].album.name);
				console.log("Song Preview: " + data.tracks.items[0].preview_url); 
			});

		}





		
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
