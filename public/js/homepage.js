const topArtistsArray = document.getElementById("artistsInputs");
const topGenresArray = document.getElementById("genreInputs");
const topTracksArray = document.getElementById("trackInputs")
console.log("I am attached!!!")

// setting, editing and deleting top artists
const setTopArtist = async (event) => {
    console.log("!!!artists save", event.target);

    console.log(topArtistsArray.childNodes);

    const topArtists = []
    topArtistsArray.childNodes.forEach(el => 
        el.value ? topArtists.push(el.value) : ''
    )

    try {
        const example = {
            artist: 'red hot chili peppers'
        }

        const response = await fetch('/api/artists/artists', {
            method: "POST",
            body: JSON.stringify(topArtists),
            headers: {
                "Content-Type": "application/json",
            },
        })   
    } catch (error) {
        console.error(error);
    }
};

// setting genres
const setTopGenre = async (event) => {
    console.log("!!!genres save", event.target);

    console.log(topGenresArray.childNodes);

    const topGenres = []
    topGenresArray.childNodes.forEach(el => 
        el.value ? topGenres.push(el.value) : ''
    )

    try {
        const example = {
            genre: 'rock'
        }

        const response = await fetch('/api/genres/genres', {
            method: "POST",
            body: JSON.stringify(topGenres),
            headers: {
                "Content-Type": "application/json",
            },
        })   
    } catch (error) {
        console.error(error);
    }
};

// setting genres
const setTopTrack = async (event) => {
    console.log("!!!tracks save", event.target);

    console.log(topTracksArray.childNodes);

    const topTracks = []
    topTracksArray.childNodes.forEach(el => 
        el.value ? topTracks.push(el.value) : ''
    )

    try {
        const example = {
            genre: 'Call Me Maybe'
        }

        const response = await fetch('/api/tracks/tracks', {
            method: "POST",
            body: JSON.stringify(topTracks),
            headers: {
                "Content-Type": "application/json",
            },
        })   
    } catch (error) {
        console.error(error);
    }
};

// event listeners

// artist event listeners 
document.querySelector("#artist-save-btn").addEventListener("click", setTopArtist);

// genre event listeners
document.querySelector("#genre-save-btn").addEventListener("click", setTopGenre);

// track event listeners
document.querySelector("#track-save-btn").addEventListener("click", setTopTrack);