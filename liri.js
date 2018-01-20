const { setTimeout } = require('timers')
const keys = require('./keys')
const twitter = require('./lib/twitter')
const spotify = require('./lib/spotify')
const request = require('request')
const inquirer = require('inquirer')
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
        if (subprocess) {
            spotify.spotifyThis(subprocess)
        }

 

        
}

// twitter.getTweets()

