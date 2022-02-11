setInterval(setClock , 1000);

const second = document.querySelector(".second") ;
const minute = document.querySelector(".minute") ;
const hourh = document.querySelector(".hour") ;
const secondt = document.querySelector(".sect") ;
const minutet = document.querySelector(".mint") ;
const hourt = document.querySelector(".hourt") ;

function setClock(){
    const date = new Date();
    const sec = date.getSeconds() / 60 ;
    const min = (sec+date.getMinutes())/ 60 ;
    const hour = (min + date.getHours()) / 12 ;
    setRotation(second,sec);
    setRotation(minute,min);
    setRotation(hourh,hour);

    hourt.innerHTML = hours12(date);
    minutet.innerHTML = date.getMinutes();
    secondt.innerHTML = date.getSeconds();


}
function hours12(date) {
    return (date.getHours() + 24) % 12 || 12; 
}

function setRotation(element,rotation){
    element.style.setProperty('--rotation' , rotation*360);
}

setClock();