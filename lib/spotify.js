const Spotify = require('node-spotify-api')
const keys = require('../keys')
let api = []

function spotifyThis(song) {
    let spotify = new Spotify(keys.spotify);
    spotify.search({ type: 'track', query: song }, function(err, data) {
        if (err) {
          return console.log('Error occurred: ' + err);
        }
    
        let items = data.tracks.items
    
        for (let i = 0; i < items.length; i++) {
            let song = items[i].name
            let band = JSON.stringify(items[i].artists[0].name)
            let url = items[i].href
            let arr = [song, band, url]
            api[i] = arr
        }
    
        return api
    });
}

module.exports = {
    spotifyThis
}
