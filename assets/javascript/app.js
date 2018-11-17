console.log("is this working");
$(document).ready(function () {

    // Global Variable
    // Questions and Answers objects

    var game = [
        {
            question: "How many lives does a cat have?",
            answerChoices: ["9", "As many as it wants", "1", "10"],
            correct: "1"
        },
        {
            question: "How many planets are in the solar system?",
            answerChoices: ["9", "10", "8", "7"],
            correct: "8"
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

    // Displays questions from object array
    function showAQuestion() {
        $("#dislplayQuestion").text(game[i].question);
        $("#answer_1").text(game[i].answerChoices[0]);
        $("#answer_2").text(game[i].answerChoices[1]);
        $("#answer_3").text(game[i].answerChoices[2]);
        $("#answer_4").text(game[i].answerChoices[3]);
        // console.log(game[i].answerChoices);
    }

    // Checks to see if chosen answer is correct.
    function checkAnswer(answer, currentQuestion) {
        if (answer === currentQuestion.correct) {
            // if true, alert saying you're correct.
            alert("You Got it?");
            // Total correct counter ticks up one.
            totalCorrect++
            // sets to the next question
            i++
            // Displays next question
            showAQuestion();
            countDown();
        }
        else {
            // Otherwise total incorrect ticks up one
            totalIncorrect++
            // Alerts your choice was incorrect
            alert("Wrong. Here's the answer: " + currentQuestion.correct);

            // Sets to next question
            i++
            // Displays next question
            showAQuestion();
            countDown();
        }
    }
    // Starts game when clicked by displaying a question
    $("#startGame").on("click", function () {
        showAQuestion();
        countDown();
        $("#startGame").hide(800);
    });

    // Recieves answer chosen
    $(".answer").on("click", function () {
        var chosenAnswer = $(this).text();
        checkAnswer(chosenAnswer, game[i]);
        stopCountDown();

    });

    // Checks to see if you've run out of questions
    // function checkIfQuestionsRanOut() {
    //     if (totalCorrect + totalIncorrect >= game.lenght) {
    //         alert("That's it. Thanks for playing");
    //     }
    //     console.log()
    // }
    /* Function takes decrement function and
    sets pace at countdown to one number per second */
    function countDown() {
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
    }
    /* Function that decreses allottedTime variable by one
    and displays it in the countDonw div
    this function is then passed into the contDown function
    to tell the decrement to go at a pace of 1 sec per decrement.*/
    function decrement() {
        allottedTime--;
        $("#countDown").html("<h2>" + allottedTime + "</h2>");

        if (allottedTime === 0) {
            alert("Time Up!");
            totalIncorrect++;
            showAQuestion();
            stopCountDown();
            countDown()
            
        }
    }
    /* function clears(resets) the allottedTime variable */
    function stopCountDown() {
        clearInterval(allottedTime);
        alottedTime = 10;
    }

    // If timer reaches 0, display correct answer and tick up total incorrect.
    // Reset time
    // Display next question.


































































































});