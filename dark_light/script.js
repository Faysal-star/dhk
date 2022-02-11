function func(){

    // Main Dark - light Part 

    var elem = document.getElementById("bod");
    if(elem.classList.contains('light')){
        elem.classList.remove('light');
        elem.classList.add('dark');
    }
    else{
        elem.classList.remove('dark');
        elem.classList.add('light');
    }
    


    // Extra Icon & Text Change
    var ic = document.getElementById('icon');
    if(ic.classList.contains('fa-sun') ){
        
        ic.classList.remove('fa-sun');
        ic.classList.add('fa-moon');
    }    
    else{
        ic.classList.remove('fa-moon');
        ic.classList.add('fa-sun')
    }

    var hea = document.getElementById('h');
    if(elem.classList.contains('light')){
        hea.innerHTML = 'Checkout my JS projects!';
    }
    else{
        hea.innerHTML = 'Welcome Bros!';
    }
}

