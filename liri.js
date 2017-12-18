var keys = require('./keys.js');
var inquirer = require('inquirer');

var twitterAPI = require('node-twitter-api');

inquirer.prompt([
	{ 
	type: 'list',
      message: "What would you like to do?",
      choices: ["my-tweets", "spotify-this-song", "movie-this"],
      name: "command"
       } 

	]).then(answers => {

    var argOne = answers.command;
 //    var argOne = process.argv[2];
	// //options:
	// 	//my-tweets
	// 	//spotify-this-song 
	// 	//movie-this
	// var argTwo = process.argv[3];
	// //options:
	// 	//'<song name here>'
	// 	//'<movie name here>'

	if (argOne === "my-tweets") {
		//ajax call to display tweets

	} else if (argOne === "spotify-this-song") {

		if (argTwo != null ) {
			// ajax call to spotify with argTwo song title

			// Artist(s)
		 	//The song's name
		 	//A preview link of the song from Spotify
		 	//The album that the song is from

		} else {
			// ajax call to spotify with "The Sign" by Ace of Base
		}
		
	} else if (argOne === "movie-this") {

		if (argTwo != null ) {
			// ajax call to OMDB with argTwo movie title

			// Title of the movie.
			//Year the movie came out.
			//IMDB Rating of the movie.
			//Rotten Tomatoes Rating of the movie.
			//Country where the movie was produced.
			//Language of the movie.
			//Plot of the movie.
			//Actors in the movie.

		} else {
			//output data for the movie 'Mr. Nobody.'

		}
		

	}


});
