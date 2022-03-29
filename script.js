

 /*   Creator : Ramaprabha
      Dateof Creation: 3/25/2022
      Description : getting location for current area
 */

function getWeatherData(){

    console.log("hi Log");

    fetch('https://weatherapi-com.p.rapidapi.com/current.json?q=auto:ip', {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
            'X-RapidAPI-Key': 'b2982f4595mshed20d7ce62554f8p14e65djsna22bb28e8b3c'
        }

       })
      .then(response => response.json())
      .then(data =>  {
        console.log('Success:', data);
        var Celcius = data.current.feelslike_c;
        var Fahrenheit = data.current.feelslike_f;
        var location = data.location.name;
        console.log('Location : ', location, 'Celcius :', Celcius, 'Fahrenheit:', Fahrenheit); 
        document.getElementById('loc').innerHTML = location;
        document.getElementById('cel').innerHTML = Celcius;
        document.getElementById('fah').innerHTML = Fahrenheit;
      });
}

 /*   Creator : Ramaprabha
      Dateof Creation: 3/25/2022
      Description : getting Pokemon Details
 */

async function callToPokemon(parm){

    console.log("getweather");
    try {
        const req = new Request('https://pokeapi.co/api/v2/pokemon/' + parm);
        console.log("response error1");
        const response = await fetch(req);
        console.log("response error2");
        if (!response.ok){
            console.log("response error");
            throw new Error(response);
        }
        console.log("end of getWeatherCall" + response);
        return response.json() ;
    } 
    catch (error) {
        console.log(error);
        console.log(error);
    }

}
 /*   Creator : Ramaprabha
      Dateof Creation: 3/26/2022
      Description : listed the image details
      Fuction Name : processResponse
 */
function processResponse(response) {
    console.log("Entered Process Response : " + response);
    let ablities=[];
    let list = document.getElementById("abli");
    list.innerHTML = "";
    console.log(list);
  
    for (var i=0, l=response.abilities.length; i<l; i++) {
        ablities[i] = response.abilities[i].ability.name;
        let li = document.createElement("li");
		li.innerText = response.abilities[i].ability.name;
		list.appendChild(li);
        
    }

    let images = document.getElementById('sprites');
    images.innerHTML = "";
    let img = document.createElement("img");  
    img.src = response.sprites.back_default;
    images.appendChild(img);

}

   

/*   Creator : Ramaprabha
    Dateof Creation: 3/24/2022
    Description : getting weather data
*/
function getPokemonData(event) {
  //  if (event.code && event.code != 'Enter') return;
    let parm = (document.getElementById("pokemon").value);
    callToPokemon(parm)
        .then(response => {
            console.log('response : ' + response);
            processResponse(response);
        })
        .catch(error => {
            console.error(`Request result in Error : ${error}`);
        });
}
