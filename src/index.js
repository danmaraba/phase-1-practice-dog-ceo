// console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', RetrievePics)

function RetrievePics() {
    return fetch(`https://dog.ceo/api/breeds/image/random/4`)
        .then(resp => resp.json())
        .then(pics => RetrieveAllBreeds(pics.message))
}


function RetrieveAllBreeds(pics) {
    const addImg = document.getElementById('dog-image-container');
    pics.forEach(pic => {
        const imgs = document.createElement('img');
        imgs.height = 120;
        imgs.src = pic;
        addImg.appendChild(imgs);
    });
}

function fetchAllBreeds() {
    fetch = 'https://dog.ceo/api/breeds/list/all'
    fetch(breedUrl)
    .then(function(response) {
        return response.json();
    })
    .then(function(json){
        return developBreeds(json);
    })
}

console.log('%c HI', 'color: firebrick')

let breedsArray


// Challenge 1
fetch("https://dog.ceo/api/breeds/image/random/4")
.then(res => res.json())
.then(data => addElements(data))

function addElements(imageData) {
    // console.log(imageData)
    // console.log(x["message"])

    imageData.message.forEach(item => {
        const element = document.createElement("img")
        element.src = item
        element.style.width = "600px"
        document.querySelector("#dog-image-container").append(element)
        document.querySelector("#dog-image-container").append(document.createElement("br"))
    });
}


// Challenge 2
fetch("https://dog.ceo/api/breeds/list/all")
.then(res => res.json())
.then(data => addBreeds(data) )

function addBreeds(breedsData) {
    breedsArray = Object.keys(breedsData.message)
    
    breedsArray.forEach(item => {
        const element = document.createElement("li")
        element.textContent = item
        element.id = item
        document.querySelector("#dog-breeds").append(element)
        // Challenge 3
        element.addEventListener("click", () => element.style.color = "red")

    });



    

}

const dropdownBox = document.querySelector("#breed-dropdown")

dropdownBox.addEventListener("click", function() {newFilteredList( dropdownBox.options[dropdownBox.options.selectedIndex].value , breedsArray)} )


// Challenge 4 - 
function newFilteredList(letter, breedsArray) {
    if (letter !== " ") {
        document.querySelector("#dog-breeds").replaceChildren("")

        breedsArray.forEach(item => {
            if (item[0] === letter) {
                const element = document.createElement("li")
                element.textContent = item
                element.id = item
                document.querySelector("#dog-breeds").append(element)
                // Challenge 3
                element.addEventListener("click", () => element.style.color = "red")
            }
        });    
    } 


    
}
