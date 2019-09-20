

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
    let wrongGuesses = 0;
    // a variable for the initial time allowed
    let timer = 20;
    //a variable for the timer interval
    let intervalId;
    //a variable for the user's guess
    let guess = "";
    //a variable for the state of the timer
    let running = false;
    //a variable to store the number of questions
    let qCount = questions.length;
    //a variable to hold the randomly selected question
    let pickedQuestion;
    //a variable to hold the randomly selected index number
    let index;
    //an array to store asked questions
    let askedArray = [];





    // hide the play again button when the game is started
     $("#playAgain").hide();
    //click start button to start game
    $("#start").on("click", function () {
        console.log("start button clicked")
        //hide the start button after the game starts
        $("#start").hide();
        //run the showQuestion function
        showQuestion();
        //run the runTimer function
        runTimer();

    })
    //timer start
    function runTimer() {
        if (!running) {
            intervalId = setInterval(decrement, 1000);
            running = true;
        }
    }
    //timer countdown
    function decrement() {
        $("#timeleft").html("<h3>Time remaining: " + timer + "</h3>");
        timer--;

        //stop timer at 0
        if (timer === 0) {
            stop();
            $("#answer").html("<p>Time is up! The correct answer is: " + pickedQuestion.choices[pickedQuestion.answer] + "</p>");
            
        }
    }

    //timer stop
    function stop() {
        running = false;
        clearInterval(intervalId);
    }
    //randomly pick question in array if not already shown
    //display question and loop though and display possible answers
    function showQuestion() {
        //generate random index in array
        index = Math.floor(Math.random() * questions.length);
        pickedQuestion = questions[index];


        $("#question").html("<h2>" + pickedQuestion.question + "</h2>");
        for (var i = 0; i < pickedQuestion.choices.length; i++) {
            let guess = $("<div>");
            guess.addClass("answerchoice");
            guess.html(pickedQuestion.choices[i]);
            //assign array position to it so can check answer
            guess.attr("data-guessvalue", i);
            $("#answer").append(guess);

        }



        //click function to select answer and outcomes
        $(".answerchoice").on("click", function () {
            //grab array position from guess
            guess = parseInt($(this).attr("data-guessvalue"));

            //correct guess or wrong guess outcomes
            if (guess === pickedQuestion.answer) {
                stop();
                correctGuesses++;
                guess = "";
                $("#answer").html("<p>Correct!</p>");
                showPicture();


            } else {
                stop();
                wrongGuesses++;
                guess = "";
                $("#answer").html("<p>Wrong! The correct answer is: " + pickedQuestion.choices[pickedQuestion.answer] + "</p>");
                showPicture();
            }
        })
    }





    function showPicture () {
        $("#answer").append("<img src=" + pickedQuestion.image + ">");
        askedArray.push(pickedQuestion);
        questions.splice(index,1);
    
        let pic = setTimeout(function() {
            $("#answer").empty();
            timer= 20;
    
        //run the score screen if all questions answered
        if ((wrongGuesses + correctGuesses) === qCount) {
            $("#question").empty();
            $("#question").html("<h3>Game Over!  Here's how you did: </h3>");
            $("#answer").append("<h4> Correct: " + correctCount + "</h4>" );
            $("#answer").append("<h4> Incorrect: " + wrongCount + "</h4>" );
            $("#playAgain").show();
            correctGuesses = 0;
            wrongGuesses = 0;
            
    
        } else {
            runTimer();
            displayQuestion();
    
        }
        }, 3000);
    
    
    }





$("#playAgain").on("click", function () {
    $("#playAgain").hide();
    $("#answer").empty();
    $("#question").empty();

    runTimer();
    showQuestion();

});

})










