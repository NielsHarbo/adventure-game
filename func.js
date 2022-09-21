
//Variabler der refererer til DOM elementer
const form = document.querySelector("#name-form")
const first = document.querySelector("#first")
const last = document.querySelector("#last")
const color = document.querySelector("#color")
const greetingDiv = document.querySelector(".greeting")

//Funktions deklarationer
//printMyName returnerer en tekstreng
//colorMyScreen returnerer ikke noget men farver skærmen
function printMyName(firstName, lastName){
    let myString = firstName + " " + lastName
    return myString
}
function colorMyScreen(col){
    document.body.style.background = col
}

//Submit eventen. Sker når formen sendes
//Den aflyser formens default opførsel (dvs. den refresher ikke)
//Der udover kalder den vores to funktioner 
//og sender værdier fra form inputs med som parametre
form.addEventListener("submit", function(event){
    event.preventDefault()
    greetingDiv.innerHTML = printMyName(first.value, last.value)
    colorMyScreen(color.value)
    greetingDiv.innerHTML +="<br><a href='q1.html'>Gå til spørgsmål1</a>"

})