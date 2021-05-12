//dependencies
const Song = require('./song');
const Playlist = require('./playlist');
const Music = require('./music');
const User = require('./user');


//Relationships


//Playlists belong to one user
Playlist.belongsTo(User, {
    foreignKey: 'user_id',
}) 

//User has many Playlists
User.hasMany(Playlist, {
    foreignKey: 'user_id',
});

// // //A playlist contains many songs
// Playlist.hasMany(Song, {
//     foreignKey: 'user_id',
// })


// //One song belongs to many playlists
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

