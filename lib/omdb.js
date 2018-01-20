const request = require('request')
const { omdb } = require('../keys')

function omdbMovieThis(movieRequest) {
    if (!movieRequest) movieRequest = 'Mr. Nobody'

    request(`http://www.omdbapi.com/?t=${movieRequest}&apikey=${omdb.key}`, (err, response) => {
        let res = response.body
        res = JSON.parse(res)
        if (res.Rating === undefined) res.Rating = 'Not Rated'
        console.log(`
            ======Movie-Info========
            Movie Title: ${res.Title}
            Year: ${res.Year}
            Rating: ${res.Rating}
            Released: ${res.Released}
            Country: ${res.Country}
            =========================
            Reviews:
            IMBD: ${res.Ratings[0].Value}
            Rotten Tomatoes: ${res.Ratings[1].Value}
            =========================
            Plot: ${res.Plot}
            Actors: ${res.Actors}
        `)
    })
}

module.exports = {
    omdbMovieThis
}
