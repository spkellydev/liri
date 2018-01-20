const twitter = require('twitter')
const keys = require('../keys')
const fs = require('fs')
const File = require('./logger')
let client = new twitter(keys.twitter)
let data = []

function getTweets () {
    let params = {screen_name: 'nodejs', count: 20};
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
    if (!error) {
        // console.log(response)
        tweets = JSON.parse(response.body)
        tweets.forEach(tweet => {
            data.push(tweet.text)
        })
        let obj = { tweets: data }
        File.Logger(obj)
        return data

    } else {
        console.log(error)
    }
    });
}

function readTweets() {
    return data
}

module.exports = {
    getTweets,
    readTweets
}