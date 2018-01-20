# Liri -- The Command Line Entertainment Hub of Northern Jersey

## Installing Liri
`npm install` will download all your dependencies, as followed: 
- "dependencies": {
-   "dotenv": "^4.0.0",
-   "inquirer": "^5.0.0",
-   "node-spotify-api": "^1.0.7",
-   "request": "^2.83.0",
-   "twitter": "^1.7.1"
  }
## Using Liri
Retrive API keys and access information from Twitter, Spotify, and OMDB Api, and create a `.env` for the program to work.
Run any one of the following commands:
- `node liri.js my-tweets` to retrieve the last 20 Tweets by Node JS
- `node liri.js movie-this <movie-name-here>` *Your Movie Name* will display information about the title of your favorite movie. Get the Title, Year, Review Scores, Actors List, Countries Invovled in Shooting, and more.
- `node liri.js spotify-this-song <song-name-here>` *Your Song Name* will retreive your Song's Title, Artist, Genre, and a link to the resource in the Spotify API
- `node liri.js do-what-it-says` will pull from a random.txt file and give you something neat!
- `node liri.js --help` will remind you of the commands

### Logs

If you ever want to refer back to your session, go to `logs/log.txt` or `logs/errors.txt` to see your results.

