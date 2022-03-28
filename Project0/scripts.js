
/*
    Created By: Norman Breuer
    Last Updated: 03/27/2022
    Description: Javascript file for project0 - "Musicaly - Music Artist Search"
*/

// API FETCH FUNCTION TO GET ARTIST ID

document.querySelector('#btn').addEventListener("click", getId);

async function getId() {
    let searchInput = document.querySelector('#search-box').value;
    console.log(searchInput);

    var options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'spotify23.p.rapidapi.com',
            'X-RapidAPI-Key': 'f960d4fb87msh6597a053ce51dcep1522f9jsn781acda7cdaa'
        }
    };

    let res = await fetch(`https://spotify23.p.rapidapi.com/search/?q=${searchInput}&type=multi&offset=0&limit=10&numberOfTopResults=5`, options)
        .then(response => response.json())
        .then(response => artistId(response))
        .catch(err => console.error(err));

        getOverview();
    return res;
}

// FUNCTION TO GET ID

    function artistId(res) {
    let id = res.artists.items[0].data.uri;
    let parsedId = id.replace("spotify:artist:","");
    console.log(id);
    console.log(id.replace("spotify:artist:",""))
    return parsedId;
}

// FUNCTION TO GET ARTIST OVERVIEW

async function getOverview() {
    let options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'spotify23.p.rapidapi.com',
            'X-RapidAPI-Key': 'f960d4fb87msh6597a053ce51dcep1522f9jsn781acda7cdaa'
        }
    };

    let res = await fetch(`https://spotify23.p.rapidapi.com/artist_overview/?id=${parsedId}`, options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
    return res;
}

// FUNCTION TO ADD COPYRIGHT AT BOTTOM OF PAGE

let $copyright = 
    `<div id="copyright">
        <p>Copyright © ${new Date().getFullYear()} Norman Breuer. Website by Norman Breuer.</p>
    </div>`

document.querySelector('#copyright').innerHTML = $copyright;


// let res = await fetch(`https://spotify23.p.rapidapi.com/search/?q=${searchInput}&type=multi&offset=0&limit=10&numberOfTopResults=5`, options)
// .then(response => response.json())
// .then(response => artistName(response))
// .then(response => artistImage(response))
// .catch(err => console.error(err));
// return res;

// FUNCTION TO GET ARTIST NAME

// function artistName(res) {
//     let name = document.querySelector('#artist-name');
//     name.innerHTML = res.artists.items[0].data.profile.name;
//     console.log(res);
//     return res;
// }

// FUNCTION TO GET ARTIST IMAGE

// function artistImage(res) {
//     let img = document.querySelector('#artist-img');
//     img.setAttribute("src", "res.artists.items[0].data.visuals.avatarImage.sources[0]");
//     console.log(res);
//     return res;
// }


