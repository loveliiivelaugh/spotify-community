//dependencies
const Playlist = require('./playlist');
const User = require('./user');
const Song = require('./song');
// const Music = require('./music');

//Relationships

//Many Playlists belong to one user
Playlist.belongsToMany(User, {
    foreignKey: 'user_id',
    through: 'UserPlaylist'
}) 

//User has many Playlists
User.hasMany(Playlist, {
    foreignKey: 'user_id',
});

//A playlist has many songs (One Playlist has many Songs)
Playlist.hasMany(Song);

//One song belongs to many playlists
Song.belongsToMany(Playlist, {
    through: 'PlaylistSong'
});


module.exports = {
    Song,
    Playlist,
    User,    
}