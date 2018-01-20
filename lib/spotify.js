const Spotify = require('node-spotify-api')
const keys = require('../keys')
let api = []
let search = {}

function spotifyThis(song) {
    if (song) {
        search = { type: 'track', query: song }
    } else {
        search = { type: 'track', query: "'The Sign'%20artist:Ace%20Of%20Base" }
    }
    let spotify = new Spotify(keys.spotify);
    spotify.search(search, function(err, data) {
        if (err) {
          return console.log('Error occurred: ' + err);
        }
    
        let items = data.tracks.items
    
        for (let i = 0; i < 1; i++) {
            let song = items[i].name
            let band = JSON.stringify(items[i].artists[0].name)
            let url = items[i].href
            let album = items[i].album.name
            let arr = [song, band, url]
            console.log(`
                ============
                Song: ${song}
                Album: ${album}
                Band: ${band}
                URL: ${url}
                ============
            `)
        }
    });
}


module.exports = {
    spotifyThis
}
