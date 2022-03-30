//I am utilizing my Fetch function with the utilization of async to pull my API
//

let btn = document.getElementById('getText')
let image= document.getElementById('image')

btn.addEventListener('click', function(){
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(res => res.json())
    .then(result => {
        console.log(result)
        image.src = result.message
    })
      .catch(err=>console.log(err))
})

// mouse over event //
//form//
 
//show and hide dropdown list item on button click  //
function favTutorial() {
    var mylist = document.getElementById("myList");
    document.getElementById("favourite").value = mylist.options[mylist.selectedIndex].text;
    }

 
//window Event - leaving the page notification//


function goodbye(e) {
    if(!e) e = window.event;
    e.cancelBubble = true;
    e.returnValue = 'Ruff! You sure you want to leave?'; 

    if (e.stopPropagation) {
        e.stopPropagation();
        e.preventDefault();
    }
}
window.onbeforeunload=goodbye; 




