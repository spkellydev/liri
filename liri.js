const { setTimeout } = require('timers')

const keys = require('./keys')
const twitter = require('./twitter/twitter')
const request = require('request')
const inquirer = require('inquirer')
const fs = require('fs')

let command = process.argv[2]
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
 

        
}

// twitter.getTweets()

