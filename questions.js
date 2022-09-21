//DOM elementer
const form = document.querySelector("#q")
const answer = document.querySelector("#answer")
const correctAnswers = document.querySelectorAll(".correct")

//Funktion der genererer et link til næste spørgsmål,
//hvis der svares rigtigt
function generateNewQuestion(){
    alert("Ih, hvor fint!")
    document.body.innerHTML += "<a href='q2.html'>Næste spørgsmål</a>"
}

//Selve submit eventen på formen
//preventDefault forhindrer at formen sendes til serveren
//variablen answerOK holder styr på om der svares rigtigt
//Vi loopper igennem alle de skjulte inputs med korrekte svar
//hvis der er et match ændres answersOK til true
//og generateNewQuestion funktionen kaldes
//Hvis answersOK tadig er false så redirectes brugeren til startsiden
form.addEventListener("submit", function(event){
    event.preventDefault() 
    let answerOK = false
    correctAnswers.forEach(function(element){
        if(answer.value.toLowerCase() == element.value.toLowerCase()){            
            answerOK = true
        }
    })
    if (answerOK == true){
        generateNewQuestion()
    }else{
        window.location.href = "index.html"
    }
})