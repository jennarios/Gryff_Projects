/*
    Created By: Norman Breuer
    Last Updated: 03/29/2022
    Description: Javascript file for project0 - "Artistfy - Music Artist Search"
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
    setArtistFollowers(response);
    setArtistLinks(response);
    setArtistMonthlyListeners(response);
    setArtistWorldRank(response);
    return secondJson;
}

// FUNCTION TO GET ID
function getArtistId(json) {
    let id = json.artists.items[0].data.uri;
    let parsedId = id.replace("spotify:artist:", "");
    return parsedId;
}

// FUNCTION TO SET ARTIST NAME
function setArtistName(json) {
    let name = document.querySelector("#artist-name");
    name.innerHTML = json.data.artist.profile.name;
}

// FUNCTION TO SET ARTIST IMAGE
function setArtistImage(json) {
    let img = document.querySelector("#artist-img");
    let url = json.data.artist.visuals.avatarImage.sources[0].url;
    img.style.backgroundImage = `url('${url}')`;
    img.style.border = "5px solid var(--pink)";
}

// FUNCTION TO SET ARTIST LINKS
function setArtistLinks(json) {
    let link1 = document.querySelector("#link1");
    link1.innerHTML = "Spotify";
    link1.href = json.data.artist.sharingInfo.shareUrl;

    let link2 = document.querySelector("#link2");
    link2.innerHTML = "Facebook";
    link2.href = json.data.artist.profile.externalLinks.items[0].url;

    let link3 = document.querySelector("#link3");
    link3.innerHTML = "Instagram";
    link3.href = json.data.artist.profile.externalLinks.items[1].url;

    let link4 = document.querySelector("#link4");
    link4.innerHTML = "Twitter";
    link4.href = json.data.artist.profile.externalLinks.items[2].url;

    let link5 = document.querySelector("#link5");
    link5.innerHTML = "Wikipedia";
    link5.href = json.data.artist.profile.externalLinks.items[3].url;
}

// FUNCTION TO SET ARTIST SPOTIFY FOLLOWERS
function setArtistFollowers(json) {
    let followers = document.querySelector("#followers");
    followers.innerHTML =
        "Spotify followers: " + json.data.artist.stats.followers;
}

// FUNCTION TO SET ARTIST SPOTIFY MONTHLY LISTENERS
function setArtistMonthlyListeners(json) {
    let listeners = document.querySelector("#listeners");
    listeners.innerHTML =
        "Spotify monthly listeners: " + json.data.artist.stats.monthlyListeners;
}

// FUNCTION TO SET ARTIST SPOTIFY WORLD RANK
function setArtistWorldRank(json) {
    let worldRank = document.querySelector("#world-rank");
    worldRank.innerHTML =
        "Spotify world rank: " + json.data.artist.stats.worldRank;
}

// FUNCTION TO SET ARTIST BIO
function setArtistBio(json) {
    let bio = document.querySelector(".bio");
    let bioTitle = document.querySelector("#bio-title");
    bio.innerHTML = json.data.artist.profile.biography.text;
    bioTitle.innerHTML = "Bio:";
}

// FUNCTION TO ADD COPYRIGHT AT BOTTOM OF PAGE
const $copyright = `<div id="copyright">
        <p>Copyright © ${new Date().getFullYear()} Norman Breuer</p>
    </div>`;

document.querySelector("footer").innerHTML = $copyright;
