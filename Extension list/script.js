let myLeads = [];
let tabName = [];
const inputEl = document.getElementById('input-el');
const inputBtn = document.getElementById('input-btn');
const ulEl = document.getElementById('ul-el');
const deleteBtn = document.getElementById('del-btn');
const tabBtn = document.getElementById('save-btn');
//const items = document.querySelectorAll('.item');


let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
let tabfl = JSON.parse(localStorage.getItem("tabName"));


if(leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage;
    tabName = tabfl;
    render(tabName, myLeads);
}

// items.forEach(function(item){
//     item.addEventListener('click', function(e){
//         let it = e.currentTarget.classList;
//         console.log(it);
//         console.log(myLeads);
//         let ind = items.indexOf(item);
//         myLeads.splice(ind,1);
//         tabName.splice(ind,1);
//         localStorage.setItem("myLeads", JSON.stringify(myLeads) );
//         localStorage.setItem("tabName", JSON.stringify(tabName) );
//         render(tabName, myLeads);
//         console.log(myLeads);
//     })
// })



tabBtn.addEventListener("click", function(){   
    
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url);
        tabName.push(tabs[0].title);
        localStorage.setItem("myLeads", JSON.stringify(myLeads) );
        localStorage.setItem("tabName", JSON.stringify(tabName) );
        render(tabName, myLeads);
    });
});

deleteBtn.addEventListener('dblclick',function(){
    localStorage.clear();
    myLeads = [];
    tabName = [];
    render(tabName,myLeads);
});

inputBtn.addEventListener('click', function(){
    myLeads.push(" ");
    tabName.push(inputEl.value);
    inputEl.value = '';
    console.log(tabName);

    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    localStorage.setItem("tabName", JSON.stringify(tabName) );
    render(tabName,myLeads);
    
}); 

function render(tname,leads){
    let listItems = "";
    for(let i = 0 ; i < leads.length ; i++){
    listItems = `
    <li class="item">
        <span> ${tname[i]} </span>
        <a target='_blank' href='${leads[i]}'>    
            ${leads[i]}
        </a>
        
    </li>
    `+listItems;

    }

    ulEl.innerHTML = listItems;
}

