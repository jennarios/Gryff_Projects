
/*
    Created By: Norman Breuer
    Last Updated: 03/27/2022
    Description: Javascript file for project0 - "Moviez - Movie Search Engine"
*/

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'movie-database-alternative.p.rapidapi.com',
		'X-RapidAPI-Key': 'f960d4fb87msh6597a053ce51dcep1522f9jsn781acda7cdaa'
	}
};

fetch('https://movie-database-alternative.p.rapidapi.com/?s=Alien&r=json&page=1', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));


let $copyright = 
    `<div id="copyright">
        <p>Copyright © ${new Date().getFullYear()} Norman Breuer. Website by Norman Breuer.</p>
    </div>`

document.querySelector('#copyright').innerHTML = $copyright;