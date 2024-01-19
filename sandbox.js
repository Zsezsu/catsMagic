const cats = [{
    id: 1,
    name: "Fülöpke",
    age: 10,
    breed: "Nordic-werden",
    img: ""
},
{
    id: 2,
    name: "Jázminka",
    age: 10,
    breed: "house cat",
    img: ""
}
]


function createDivElement(tag, content){
    const divElement = document.createElement('div');
    const element = document.createElement(tag);
    divElement.appendChild(element);
    element.textContent = content;
    return divElement
}

function manipulateTitleHeaders(){
    const headerElements = document.querySelectorAll('.title');
    console.log(headerElements)
    for(const headerElement of headerElements){
        headerElement.classList.add("color");
        console.log(headerElement.classList);
    }
}

function displayCats(cats){
    const catsDiv = document.querySelector('#cats-div');
    for(const cat of cats){
        const catDivElement = createDivElement('p', cat.name);
        catsDiv.appendChild(catDivElement);
        catDivElement.classList.add("cat")
    }
}

function handleClick(cats){
    const catsDiv = document.querySelectorAll(".cat");
    console.log(catsDiv)
    
}


function main() {
    manipulateTitleHeaders();
    displayCats(cats);
    handleClick(cats);
  
}



window.addEventListener("load", main)