console.log("is this working");
$(document).ready(function () {

    // Global Variable
    // Questions and Answers objects

    var game = [
        {
            question: "How many lives does a cat have?",
            answerChoices: ["Nine", "As many as it wants", "One", "Ten"],
            correct: "One"
        },
        {
            question: "How many planets are in the solar system?",
            answerChoices: ["Nine", "Ten", "Eight", "Seven"],
            correct: "Eight"
        },
        {
            question: "Who invented the olie skateboard maneuver?",
            answerChoices: ["Oliver North", "Oliver Kahn", "Alan 'Ollie' Gelfand", "Olivier Messiaen"],
            correct: "Alan 'Ollie' Gelfand"
        }

    ]
    // Correctly Answered Total
    var totalCorrect = 0

    // Incorrect Total
    var totalIncorrect = 0

    // Total number of quetions
    var numberOfQuestionsAsked = 0

    // Index variable
    var i = 0;

    // Amount of seconds to answere each question
    var allottedTime = 10;

    //  Variable that will hold our interval ID when we execute
    //  the "run" function
    var intervalId;

    // Timer reset, question display
    function showAQuestion() {
        // Empties timer display to reset timer display
        $("#countDown").empty();
        // starts timer
        intervalId = setInterval(decrement, 1000);
        /* calls questions and answers from object array and displays
        to corresponding ids in html*/
        $("#dislplayQuestion").text(game[i].question);
        $("#answer_1").text(game[i].answerChoices[0]);
        $("#answer_2").text(game[i].answerChoices[1]);
        $("#answer_3").text(game[i].answerChoices[2]);
        $("#answer_4").text(game[i].answerChoices[3]);

    }

    // Checks to see if chosen answer is correct.
    function checkAnswer(answer, currentQuestion) {
        stopCountDown();
        if (answer === currentQuestion.correct) {
            // if true, alert saying you're correct.
            alert("You Got it?");
            // Total correct counter ticks up one.
            totalCorrect++;
            // sets to the next question
            i++;
            // Displays next question
            showAQuestion();
            
        }
        else {
            // Otherwise total incorrect ticks up one
            totalIncorrect++
            // Alerts your choice was incorrect and shows the correct answere
            alert("Wrong. Here's the answer: " + currentQuestion.correct);
            // Sets to next question
            i++;
            // Displays next question
            showAQuestion();
            
        }
        
    }
    /* Function that decreses allottedTime variable by one
    and displays it in the countDown div*/
    function decrement() {
        //allotedTime is set as a global var 
        allottedTime--;
        // dynamically displays countdown
        $("#countDown").html("<h2>" + allottedTime + "</h2>");
        // checks to see if time has run out to answere question
        if (allottedTime === 0) {
            // if true, then alerts...
            alert("Time Up!");
            // ticks up one for incorrect answere
            totalIncorrect++;
            // moves to next question in array
            i++;
            // stops timer
            stopCountDown();
            // moves onto next question
            showAQuestion();
        }
    }
    /* function clears(resets) the allottedTime variable */
    function stopCountDown() {
        clearInterval(intervalId);
        allottedTime = 10;  
    }
    // Starts game when clicked by displaying a question
    $("#startGame").on("click", function () {
        showAQuestion();
        $("#startGame").hide(800);
    });

    // Recieves answer chosen
    $(".answer").on("click", function () {
        var chosenAnswer = $(this).text();
        checkAnswer(chosenAnswer, game[i]);
        // stopCountDown();
    });

    // Checks to see if you've run out of questions
    // function checkIfQuestionsRanOut() {
    //     if (totalCorrect + totalIncorrect >= game.lenght) {
    //         alert("That's it. Thanks for playing");
    //     }
    //     console.log()
    // }
    

    // If timer reaches 0, display correct answer and tick up total incorrect.
    // Reset time
    // Display next question.


































































































});