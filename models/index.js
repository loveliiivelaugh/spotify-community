//dependencies
const Playlist = require('./playlist');
const User = require('./user');
const Song = require('./song');
const Music = require('./music');


//Relationships

//Playlists belong to one user
Playlist.belongsTo(User, {
    foreignKey: 'user_id',
}) 

//User has many Playlists
User.hasMany(Playlist, {
    foreignKey: 'user_id',
});

//A playlist has many songs
// Playlist.hasMany(Song)


// //One song belongs to many playlists
// Song.belongsTo(Playlist)

// //Music has many playlists


// Music.belongsToMany(Playlist, {
//     foreignKey: ''
// }) 

module.exports = {
    Song,
    Playlist,
    Music,
    User,    
}