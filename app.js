let p = document.getElementById("output");
let name;
let country;
let nameChange = document.getElementById("nameChange");
let countryChange = document.getElementById("countryChange");

nameChange.addEventListener("change", function(){
    name = event.target.value;
    changeInput();
})

countryChange.addEventListener("change", function(){
    country = event.target.value;
    changeInput();
});

const changeInput = function() {
    const text = `Je heet ${name} en je komt uit ${country}`; 
    p.textContent = text;
}

// // dit is de name als je het invoert
// const nameChanged = function(event){
//     name = event.target.value;
//     changeInput();
// }

// // dit is de keuze van je land
// const countryChange = function(event){
//     country = event.target.value;
//     changeInput();
// }


// // dit laat beide opties zien in text vorm
// const changeInput =  function(){
//     const text = `Je heet ${name} en je komt uit ${country}`; 
//     p.textContent = text;
// }

