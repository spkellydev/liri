const { setTimeout } = require('timers')
const keys = require('./keys')
const twitter = require('./lib/twitter')
const spotify = require('./lib/spotify')
const inquirer = require('inquirer')
const omdb = require('./lib/omdb')
const { cmd } = require('./lib/cmd')
let {command, subprocess} = require('./argv')


switch (command) {
    case 'my-tweets':
        twitter.getTweets()
        let tweets = twitter.readTweets()
        if (tweets.length === 0) {
            setTimeout(function () {

                var questions = [{
                    name: 'tweets',
                    message: 'Last 20 Tweets',
                    type: 'list',
                    choices: tweets,
                    pageSize: 30
                }]
        
                inquirer.prompt(questions, function (answer) {
                    console.log(answer)
                })
            }, 700)
        }
        break
    case 'spotify-this-song':
        spotify.spotifyThis(subprocess)
        break
    case 'movie-this':
        omdb.omdbMovieThis(subprocess)
        break
    case 'do-what-it-says':
        cmd()
        break
    case '--help':
        console.log(`
        Your Choices are to run "node liri.js" followed by:
            my-tweets                           ~|>>>> This will return the last 20 tweets from NodeJS
            spotify-this-song <song name here>  ~|>>>> This will return song data from Spotify
            movie-this <movie title here>       ~|>>>> This will return movie data from OMDbAPI
            do-what-it-says                     ~|>>>> This will return something random
        `)
        break
    default:
        console.log(`RUN   node liri.js --help`)

 

        
}

// twitter.getTweets()

