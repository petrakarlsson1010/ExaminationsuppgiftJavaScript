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
let svar = frågor(i).querySelectorAll("input:checked");

/*Styr knapptryckning på divarna, (vid tryck) borde
diven försvinna och man kan gå vidare till nästa fråga. 
fungerade förut men fungerar inte längre! Varför?*/
for (let i = 0; i <nästabtn.length; i++){
    nästabtn(i).onclick = function(){

        frågor[i].style.display = "none";
        if (frågor[i+1]){
            frågor[i+1].style.display = "block";
        }
    }
//Borde styra poängräkningen, får den inte att fungera. 
for (let i = 0; i <frågor.length; i++){
    if (svar && svar.valu === (i).rättsvar){
        poäng++;
        }
    }
}

/*Fungerar inte.... 
for (let i = 0; i <nästabtn.length; i++){
    nästabtn[i].onclick = function(){
      if(rättsvar<frågor.length * 0.5){
        console.log("Du har fått mindre än 50% rätt");
      }  
      else if(rättsvar <= frågor.length * 0.78){
        console.log("Du har fått mer än 50% rätt");
      }
      else{
        console.log("Du har fått mer än 70% rätt");
      }

    };
} */

};
