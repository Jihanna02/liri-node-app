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

function runFunctions(a, b) {

	if (a === "my-tweets") {
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

 	} else if (a === "spotify-this-song") {

 		var Spotify = require('node-spotify-api');
 
		var spotify = new Spotify({
		  id: keys.spotifyKeys.client_Id,
		  secret: keys.spotifyKeys.client_secret
		});

 		if (b !== undefined ) {
			// ajax call to spotify with argTwo song title


			spotify.search({ type: 'track', 
				query: b,
				limit: 1 }, function(err, data) {
			  if (err) {
			    return console.log("error alert");
			  }
			 
				console.log("Artist: " + data.tracks.items[0].artists[0].name);
				console.log("Song Title: " + data.tracks.items[0].name);
				console.log("Album: " + data.tracks.items[0].album.name);
				console.log("Song Preview: " + data.tracks.items[0].preview_url); 
			});

		} else {

			spotify.search({ type: 'track', 
				query: "The Sign Ace of Base",
				limit: 2 }, function(err, data) {
			  if (err) {
			    return console.log("error alert");
			  }
			 
				console.log("Artist: " + data.tracks.items[0].artists[0].name);
				console.log("Song Title: " + data.tracks.items[0].name);
				console.log("Album: " + data.tracks.items[0].album.name);
				console.log("Song Preview: " + data.tracks.items[0].preview_url); 
			});

		}
		
	} else if (a === "movie-this") {

		var request = require('request');

		var requestTitle = "";

		if (b !== undefined) {
			requestTitle = 'http://www.omdbapi.com/?apikey=trilogy&'+'t='+b;

		} else {
			requestTitle = "http://www.omdbapi.com/?apikey=trilogy&t=Mr.+Nobody";
		}		

		request(requestTitle, function (error, response, body) {
			var movieData = JSON.parse(body);

	  		console.log("Movie Title: " + movieData.Title); 
			console.log("Year: " + movieData.Year);
			console.log("IMDB Rating: " + movieData.imdbRating);
			console.log("Rotten Tomatoes Score: " + movieData.Ratings[1].Value);
			console.log("Country: " + movieData.Country);
			console.log("Language(s): " + movieData.Language);
			console.log("Plot: " + movieData.Plot);
			console.log("Cast: " + movieData.Actors);
		});
		
	} 
}

runFunctions(argOne, argTwo);

if (argOne === "do-what-it-says") {

		var fs = require('fs');

		fs.readFile('random.txt', 'utf8', function(error,data){
			if(error){
				console.log("error alert");

			} else {
				randomData = data.split(',');
				argOne = randomData[0];
				argTwo = randomData[1];

				runFunctions(argOne, argTwo);
	
			}
		});

	}
