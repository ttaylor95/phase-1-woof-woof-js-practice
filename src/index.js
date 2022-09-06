// initialize a variable for URL 

const baseURL = 'http://localhost:3000';

let dogs = [];

//when the page loads, use 'fetch' to get all of the pup data 

document.addEventListener('DOMContentLoaded', fetchPupData);

// add a span with the pup's name to the dobg bar
function fetchPupData(){
    const dogBar = document.getElementById('dog-bar')
   // const dogSpan = document.createElement('span'); creating a span element,tying it to a variable and appending it makes it cleaner, this would've went into the forEach loop
    dogBar.innerHTML = ''
    fetch(baseURL + '/pups')
    .then(res => res.json())
    .then(data => {
        console.log(data)
        dogs.push(data)
        data.forEach( pup => {
            dogBar.innerHTML += `<span><a href="#" >${pup.name}</a></span>`
        } )

        attachClicksToLinks();
       
    }) }

    console.log(dogs); // oh ok, so i would just call this in the function at the bottom after the click event?


// function grabOnePup(id){
//     return fetch(baseURL + `/pups/${id}`)
//     .then(res => res.json())

// click event - user clicks on span button

const attachClicksToLinks = () =>{
   const pups = document.querySelectorAll('a')
    pups.forEach((pup) => {
        pup.addEventListener('click', displayPupInfo)

    })
}

//display dog info for each pup  

function displayPupInfo(dogObj){
    const info = document.getElementById('dog-info')
    info.innerHTML=''
    const img = document.createElement('img')
    dogs.forEach((puppy) =>{
        info.innerHTML=`
        <img src=${puppy.image}>
        
        `
    })
    console.log(dogObj)
}
//toggle button function
