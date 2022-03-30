/* 
    Created by: Samantha Rivera
    Last updated: 3/29/22
    Description: API for random dog breed generator
*/
 
// alert method when page first loads 

alert("Be ready for cuteness overload!");

//message to the console
console.log("Dogs are the best!");

//click button for random dog photo

let btn = document.getElementById('getPic')
let image = document.getElementById('image')

// Fetch API to request a random dog breed 
btn.addEventListener('click', function() {
    fetch("https://dog.ceo/api/breeds/image/random")
        .then(res => res.json())
        .then(result => {
            console.log(result)
            image.src = result.message
        })
        .catch(err=>console.log(err))
})
