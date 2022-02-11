const h3tags = document.getElementsByTagName('h3');


// console.log(tagNames);

for(const h3 of h3tags){
    h3.style.textAlign = "center"
    
}

// const a3 = document.getElementById("art3");
// a3.style.backgroundColor = " green";
// a3.style.padding = "20px"

const a = document.getElementsByClassName("art");
for(const art of a){
    art.style.border = "1px solid green";
    art.style.margin = "10px";
    art.style.padding = "10px";
    art.style.borderRadius = "10px";
    art.style.textAlign = " center";
} 



const h1 = document.getElementById("h1");
h1.setAttribute("title","Wow! You Hovered ME");
console.log(h1.parentNode);

const a1 = document.getElementById("article1");
console.log(a1.childNodes);
console.log(a1.children);
//removeChild 


const ul = document.getElementById("list");
const li = document.createElement("li");
li.innerText = "Blog-5";
ul.appendChild(li)