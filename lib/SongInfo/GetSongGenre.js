const songlist = require('../db/songlist.json')

function getSongGenre(pram) {

    var name = pram.toLowerCase()

    try {
        return songlist[name].genre
    } catch (error) {
        return TypeError(`ID Doesn't is not recognized`)
    }

}

module.exports = getSongGenre