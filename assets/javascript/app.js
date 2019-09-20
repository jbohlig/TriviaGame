 

$(document).ready(function () {

    //an array of objects to hold my questions/answers, I'll add more questions later

    let questions = [
        {
            question: "The beaver is the national emblem of which country?", 
            choices: ["England", "Canada", "Norway", "Mexico"],
            answer: 1,
            image: "assets/images/Canadianflag.jpg"
         },
         {
            question: "How many players are there in a baseball team?", 
            choices: ["7", "11", "13", "9"],
            answer: 3,
            image: "assets/images/baseball.png"
         }]

         // a variable to store the count of correct guesses
let correctGuesses = 0;
         // a variable to store the count of wrong guesses
let wrongCGuesses = 0;
         // a variable for the initial time allowed
let timer = 20;
         //a variable for the timer interval
let intervalId;
         //a variable for the user's guess
let guess ="";
         //a variable for the state of the timer
let running = false;
         //a variable to store the number of questions
let qCount = questions.length;

let pick;
let index;
let newArray = [];
let holder = [];












})