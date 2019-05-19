# liri-node-app

## About The LIRI Bot

The LIRI Bot is an application that utilizes node.js to target API's and provide information in several categories.

    * Band performance dates
    * Spotify song information
    * Movie Information

The LIRI Bot is also intuitive in that it has additional default functionality which will allows the user to access information if they forget to add information in the search field, or if they perform certain additional requests. 

## Why LIRI?

LIRI allows a user to access entertainment information in various categories in **one place**. This application allows users to solve all of their show buisiness needs with ease.

## How It Works!

#### Bands In Town 

To access the bands in town api with LIRI the user simply has to type in the command *concert-this*, and then provide LIRI with the artist of interest as demonstrated below.

![bands in town](https://github.com/jvalentine1/liri-node-app/blob/master/images/Band-%20in-town-Gif.2019-05-18_17_21_39.gif)

LIRI will then provide concert information about the requested artist. 

#### Spotify Search 

LIRI allows a user to access the spotify api and track information by typing in *spotify-this-song*, and then provide LIRI with the song of interest as demonstrated below.

![spotify](https://github.com/jvalentine1/liri-node-app/blob/master/images/spotify%20song%20search%20gif.2019-05-19%2013_26_48.gif)

LIRI will then provide track details and a preview url.

## Movie Search

LIRI allows the user to access to the OMDB api by typing in *movie-this*, if the user provides no search requirement LIRI will provide information on a default move stored as shown below.

![omdb](https://github.com/jvalentine1/liri-node-app/blob/master/images/movie%20search%20no%20title%20video.2019-05-19%2011_42_46.gif)

If the user provides a **movie title** after the *movie-this* request, then LIRI will provide information on the requested movie title as shown below. 

![omdb2](https://github.com/jvalentine1/liri-node-app/blob/master/images/movie%20search%20with%20title%20gif.2019-05-19%2011_45_33.gif)

## Do What it Says

LIRI also has a *do-what-it-says* command that will pull default information from designated api's stored in LIRI as shown below

![do what it says](https://github.com/jvalentine1/liri-node-app/blob/master/images/do%20what%20it%20says%20gif.2019-05-19%2013_47_56.gif)

## Information Log 

LIRI also stores the information that the user has search by utilizing a text log as shown below

![text log](https://github.com/jvalentine1/liri-node-app/blob/master/images/log%20text%20gif.2019-05-19%2014_30_12.gif)

## Setting up you machine 

In order for Developers to access this application they will need to download the following npm packages. 

    *npm install axios
    *npm install moment
    *npm install node-spotify-api
    *npm install dotenv

The user will then be required to create a .env folder in the appropriate directory where they will add their unique spotify client id and secret in order to access the spotify api. *.env folder setup below*

        ```js
            console.log('this is loaded');

            exports.spotify = {
                id: process.env.SPOTIFY_ID,
                secret: process.env.SPOTIFY_SECRET
            };
        ```

