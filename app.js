let p = document.getElementById("output");
let name;
let country;

// dit is de name als je het invoert
const nameChanged = function(event){
    name = event.target.value;
    changeInput();
}

// dit is de keuze van je land
const countryChange = function(event){
    country = event.target.value;
    changeInput();
}


// dit laat beide opties zien in text vorm
const changeInput =  function(){
    const text = `Je heet ${name} en je komt uit ${country}`; 
    p.textContent = text;
}

