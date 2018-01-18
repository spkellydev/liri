const twitter = require('twitter')
const keys = require('../keys')
const fs = require('fs')
let client = new twitter(keys.twitter)

var params = {screen_name: 'nodejs'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    tweets = JSON.stringify(tweets)
    fs.writeFile('./tweetData.json', tweets, (err) => {
        if (err) console.log(err)
    })
  } else {
    console.log(error)
  }
});
