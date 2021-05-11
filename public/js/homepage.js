// setting, editing and deleting top artists
const setTopArtist = async (event) => {
    const artists = [];
    console.log(artists);
    console.log("artist save")
};
const editTopArtist = async (event) => {};
const delTopArtist = async (event) => {};
// setting, editing, and delting top genres
const setTopGenre = async (event) => {
    const genres = [];
    console.log("genre save")
};
const editTopGenre = async (event) => {};
const delTopGenre = async (event) => {};
// setting, editing, and deleting top tracks
const setTopTrack = async (event) => {
    const tracks = [];
    console.log("track save")
};
const editTopTrack = async (event) => {};
const delTopTrack = async (event) => {};



// artist event listeners 
document.querySelector('#artistsSaveBtn').addEventListener("click", setTopArtist);

// genre event listeners
document.querySelector('#genresSaveBtn').addEventListener("click", setTopGenre);

// track event listeners
document.querySelector('#tracksSaveBtn').addEventListener("click", setTopTrack);
