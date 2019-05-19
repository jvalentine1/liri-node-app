require("dotenv").config();

var keys = require("./keys.js");
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);

var fs = require("fs");
var axios = require("axios");
var moment = require("moment");

var search = process.argv[2];
var term = process.argv.slice(3).join(" ");
var show = "concert-this";
var song = "spotify-this-song";
var movie = "movie-this";
var doIt = "do-what-it-says";

if(search === show) {
    bandInTown();
}
else if (search === song) {
    spotifySearch(term);
}
else if (search === movie) {
    movieSearch();
}
else if (search === doIt) {
    doWhatItSays();
}

function bandInTown() {
    
    var artist = term;
    var URL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";

    axios.get(URL).then(function(response) {
        
        var data = response.data[0];
        
        var showInfo = [
            artist + " Show",
            "Venue: " + data.venue.name,
            "City: " + data.venue.city,
            "Date: " + moment(data.datetime).format("MM/DD/YY, h:mm:ss a")
        ].join("\n\n");

        console.log("\n");
        console.log(showInfo);
        console.log("\n");

        logTxt(showInfo);
    });
}

function spotifySearch(term) {

    spotify.search({type: 'track', query: term}, function(err, data) {

        if (err) {
            return console.log('Error occurred: ' + err);
          }
        
          var response = data.tracks.items[0].album;

          var trackInfo = [
              "Artist: " + response.artists[0].name,
              "Title: " + term,
              "Song Preview: " + data.tracks.items[0].preview_url,
              "Album: " + response.name
          ].join("\n");

          console.log("\n");
          console.log(trackInfo);
          console.log("\n");

          logTxt(trackInfo);
    });
}

function movieSearch() {
    if (term === "") {
        var movieName = "mr.nobody"
        var URL = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy"

        axios.get(URL).then(function(response) {
            var data = response.data
            
            var movieInfo = [
                "Title: " + data.Title,
                "Release Date: " + data.Released,
                "IMDB Rating: " + data.imdbRating,
                "Rotten Tomatoes: " + data.Ratings[1].Value,
                "Country: " + data.Country[4],
                "Language: " + data.Language,
                "Actors: " + data.Actors,
                "Plot: " + data.Plot
            ].join("\n");

            console.log("\n");
            console.log(movieInfo);
            console.log("\n");

            logTxt(movieInfo);
        });
    }
    else {
        var movieName = term;
        var URL = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy"

        axios.get(URL).then(function(response) {
            var data = response.data
            
            var movieInfo = [
                "Title: " + data.Title,
                "Release Date: " + data.Released,
                "IMDB Rating: " + data.imdbRating,
                "Rotten Tomatoes: " + data.Ratings[1].Value,
                "Country: " + data.Country[4],
                "Language: " + data.Language,
                "Actors: " + data.Actors,
                "Plot: " + data.Plot
            ].join("\n");

            console.log("\n");
            console.log(movieInfo);
            console.log("\n");

            logTxt(movieInfo);
        });
    }
}

function doWhatItSays() {
    fs.readFile("random.txt", "UTF-8", function(err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }

        var response = data.split('\"');
        spotifySearch(response[1]);

    });
}

function logTxt(data) {
    fs.appendFile("log.txt", data, function(err) {
        if(err) {
            return console.log("Error Occurred: " + err);
        }
        else {
            console.log("Content Added" + "\n");
        }
    })
}