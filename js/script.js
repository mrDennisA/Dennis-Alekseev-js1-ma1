const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];


// Question 01
console.log("\nQuestion 01:")

function cat(complain){
    console.log(complain);
}

cat("Meow!");


// Question 02
console.log("\nQuestion 02:")

const heading = document.querySelector("h3");
heading.innerHTML = "Updated heading";


// Question 03
console.log("\nQuestion 03:")

heading.style.fontSize = "2em";


// Question 04
console.log("\nQuestion 04:")

heading.classList = "subheading";


// Question 05
console.log("\nQuestion 05:")

const paragraphs = document.querySelectorAll("p");

function selectColor(color){
    for(i = 0; i < paragraphs.length; i++){
        paragraphs[i].style.color = color;
    }
}

selectColor("red");


// Question 06
console.log("\nQuestion 06:")

const resultsContainer = document.querySelector(".results");

resultsContainer.innerHTML = "<p>New paragraph</p>";
resultsContainer.style.backgroundColor = "yellow";


// Question 07
console.log("\nQuestion 07:")

function animalsList(list){
    for(i = 0; i < list.length; i++){
        console.log("Name: " + list[i].name);
    }
}

animalsList(cats);


// Question 08
console.log("\nQuestion 08:")

function createCats(cats){
    let html = "";

    for(i = 0; i < cats.length; i++){

        let knowAge = "Age Unknown"
        if(cats[i].age){
            knowAge = cats[i].age;
        }

        html +=`
            <div>
                <h5>Name: ${cats[i].name}</h5>
                <p>Age: ${knowAge}</p>
            </div>`;
    }
    return html;
}

const updateHTML = createCats(cats)
const catContainer = document.querySelector(".cat-container")

catContainer.innerHTML = updateHTML;