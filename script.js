let quizet = [
    {
        fråga: "Finns jultomten?",
        svarsalternativ: ["Självklart", "Bara barn tror på tomten"],
        rättsvar: "Självklart"
    },
    {
        fråga: "Hur många renar har jultomten?",
        svarsalternativ: ["Tomten har 9 renar", "Tomten har 12 renar"],
        rättsvar: "Tomten har 9 renar",
    },
    {
        fråga: "Vilket av följande alternativ är inte ett namn på tomtens renar?",
        svarsalternativ: ["Vixen", "Blixten",],
        rättsvar: "Vixen",
    },
    {
        fråga: "Vem har namnsdag på julafton?",
        svarsalternativ: ["Eva", "Adam"],
        rättsvar: "Eva",
    },
    {
        fråga: "Vilken julkalender sändes på SVT 2019?",
        svarsalternativ: ["Tusen år till Julafton", "Panik i tomteverkstan"],
        rättsvar: "Panik i tomteverkstan",
    },
    {
        fråga: "Vad är 2024 års smak på blossas julglögg?",
        svarsalternativ: ["Pomerans och kryddnejlika", "Whisky och algen dulse"],
        rättsvar: "Whisky och algen dulse",
    },
    {
        fråga: "Hur långt är avståndet mellan Stockholm och Nordpolen? (fågelväg)",
        svarsalternativ: ["Cirka 4.560,02 km", "Cirka 3.410,04 km"],
        rättsvar: "Cirka 3.410,04 km",
    },
    {
        fråga: "Vilken av följande ingridientser finns inte i en vanlig pepparkaksdeg?",
        svarsalternativ: ["Vispgrädde", "Ägg"],
        rättsvar: "Ägg",
    },
    {
        fråga: "Vad betyder det latinska ordet advent?",
        svarsalternativ: ["Ankomst", "Gryning"],
        rättsvar: "Ankomst",
    },
    {
        fråga: "Vilken dag ska man kasta ut julgranen?",
        svarsalternativ: ["Trettondagen", "Tjugondag knut"],
        rättsvar: "Tjugondag knut",
    },
]
window.onload = function() {

let frågor = document.querySelectorAll(".frågor");
let nästabtn = document.querySelectorAll(".nästaBtn");
let resultat = document.getElementsByClassName(".resultat");
let aktuelfråga = 0;
let poäng = 0;

frågor[aktuelfråga].style.display = "block";

/*Styr knapptryckning på divarna, (vid tryck) borde
diven försvinna och man kan gå vidare till nästa fråga. 
fungerade förut men fungerar inte längre! Varför?*/
for (let i = 0; i < nästabtn.length; i++){
    nästabtn[i].onclick = function(){
        let val = frågor[i].querySelector("input[type='radio']:checked");

        if (svar && svar.value === quizet[i].rättsvar){
            poäng++;
            }  
      } 

        
//Borde styra poängräkningen, får den inte att fungera. 

for (let i = 0; i <frågor.length; i++){
    
    let svar = frågor[i].querySelector("input:checked");
    
    
    }
if (poäng < frågor.length * 0.5){
    meddelande("Du fick: " + poäng + ",vilket är mindre än 50% rätt.");
}else if(poäng <= frågor.length * 0.75){
    meddelande("Du fick :" + poäng + ". Det är mer än 50% rätt.");
}else{
    meddelande("Du fick :" + poäng + "Det är mer än 75% rätt.");
};
resultat.style.displey = "block";
};
}


