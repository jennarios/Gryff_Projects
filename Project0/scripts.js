/*
    Created By: Norman Breuer
    Last Updated: 03/27/2022
    Description: Javascript file for project0 - "Musicaly - Music Artist Search"
*/

// GLOBAL VARIABLES

document.querySelector("#btn").addEventListener("click", getId);

const options = {
    method: "GET",
    headers: {
        "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
        "X-RapidAPI-Key": "f960d4fb87msh6597a053ce51dcep1522f9jsn781acda7cdaa",
    },
};

// API FETCH FUNCTIONS

async function getId() {
    let searchInput = document.querySelector("#search-box").value;
    console.log(searchInput);

    let firstJson = await fetch(
        `https://spotify23.p.rapidapi.com/search/?q=${searchInput}&type=multi&offset=0&limit=10&numberOfTopResults=5`,
        options
    )
        .then((response) => response.json())
        .then((response) => getArtistId(response))
        .then((response) => getOverview(response))
        .catch((err) => console.error(err));
    return firstJson;
}

async function getOverview(parsedId) {
    let secondJson = await fetch(
        `https://spotify23.p.rapidapi.com/artist_overview/?id=${parsedId}`,
        options
    );
    let response = await secondJson.json();
    setArtistName(response);
    setArtistBio(response);
    setArtistImage(response);
    console.log(response, name);
    // .catch(err => console.error(err));
    return secondJson;
}

// FUNCTION TO GET ID
function getArtistId(json) {
    let id = json.artists.items[0].data.uri;
    let parsedId = id.replace("spotify:artist:", "");
    console.log(id);
    console.log(id.replace("spotify:artist:", ""));
    return parsedId;
}

// FUNCTION TO GET ARTIST NAME
function setArtistName(response) {
    let name = document.querySelector("#artist-name");
    name.innerHTML = response.data.artist.profile.name;
    console.log(response);
}

// FUNCTION TO GET ARTIST BIO
function setArtistBio(res) {
    let bio = document.querySelector("#bio");
    bio.innerHTML = res.data.artist.profile.biography.text;
    console.log(res);
    return bio;
}

// FUNCTION TO GET ARTIST IMAGE
function setArtistImage(json) {
    let img = document.querySelector("#artist-img");
    let url = json.data.artist.visuals.avatarImage.sources[0].url;
    img.style.backgroundImage = `url('${url}')`;
}

// FUNCTION TO ADD COPYRIGHT AT BOTTOM OF PAGE
const $copyright = `<div id="copyright">
        <p>Copyright © ${new Date().getFullYear()} Norman Breuer</p>
    </div>`;

document.querySelector("footer").innerHTML = $copyright;
