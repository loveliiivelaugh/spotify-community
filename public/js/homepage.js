// setting, editing and deleting top artists
const setTopArtist = async (event) => {
    console.log("artists save", event.target);
    try {
        const example = {
            artist: 'red hot chili peppers'
        }

        const response = await fetch('/api/music/artists', {
            method: "POST",
            body: JSON.stringify(example),
            headers: {
                "Content-Type": "application/json",
            },
        })   
    } catch (error) {
        console.error(error);
    }
};



// const editTopArtist = async (event) => {};
// const delTopArtist = async (event) => {};



// setting, editing, and delting top genres
const setTopGenre = async (event) => {
console.log("genres save");

};
// const editTopGenre = async (event) => {};
// const delTopGenre = async (event) => {};


// setting, editing, and deleting top tracks
const setTopTrack = async (event) => {
   console.log("tracks save");
};
// const editTopTrack = async (event) => {};
// const delTopTrack = async (event) => {};



// event listeners

// artist event listeners 
document.querySelector("#artistsSaveBtn").addEventListener("click", setTopArtist);

// genre event listeners
document.querySelector("#genresSaveBtn").addEventListener("click", setTopGenre);

// track event listeners
document.querySelector("#tracksSaveBtn").addEventListener("click", setTopTrack);
