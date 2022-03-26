
/*
    Created By: Norman Breuer
    Last Updated: 03/26/2022
    Description: Javascript file for project0 - "Random Movie Generator"
*/

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'movie-database-alternative.p.rapidapi.com',
		'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY'
	}
};

fetch('https://movie-database-alternative.p.rapidapi.com/?s=Avengers%20Endgame&r=json&page=1', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));