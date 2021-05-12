//dependencies
const Song = require('./song');
const Playlist = require('./playlist');
const Music = require('./music');
const User = require('./user');

//Relationships

//A playlist contains many songs
// Playlist.hasMany(Song, {

// })

//One song belongs to many playlists
// Song.belongsTo(Playlist, {
//     foreignKey: 'playlist_id'
// })

// //Music contains many playlists
// Music.belongsToMany(Playlist, {
//     foreignKey: ''
// }) 

module.exports = {
    Song
}