//dependencies
const Song = require('./song');
const Playlist = require('./playlist');

//Relationships
//One song belongs to many playlists
Song.belongsTo(Playlist, {
    foreignKey: 'playlist_id'
})

//Many playlists contain many songs
Playlist.hasMany(Song, {

})