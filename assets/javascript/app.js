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
    // Selected Answer
    var userPick;

    // Correctly Answered Total
    var totalCorrect = 0

    // Incorrect Total
    var totalIncorrect = 0

    // Total number of quetions
    var numberOfQuestionsAsked = 0

    // Index variable
    var i = 0;

    // Game sarts when start button is pressed.
   
    // Displays questions from object array
    function nextQuestion() {
        $("#dislplayQuestion").text(game[i].question);
        $("#answer_1").text(game[i].answerChoices[0]);
        $("#answer_2").text(game[i].answerChoices[1]);
        $("#answer_3").text(game[i].answerChoices[2]);
        $("#answer_4").text(game[i].answerChoices[3]);
        console.log(game[i].answerChoices);
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
            nextQuestion()
        }
        else {
            // Otherwise total incorrect ticks up one
            totalIncorrect++
            // Alerts your choice was incorrect
            alert("This is the corrct answer" + currentQuestion.correct);
            
            // Sets to next question
            i++
            // Displays next question
            nextQuestion()
        }
    }
    // When click displays next question is anweres
    $("#startGame").on("click", function () {
        nextQuestion();
    });

    // Recieves answer chosen
    $(".answer").on("click", function () {
        var chosenAnswer = $(this).text();
        checkAnswer(chosenAnswer, game[i])

    });

    // Checks to see if you've run out of questions
    if (game[i] >= 3) {
        alert("That's it. Thanks for playing");
    }

    // Creat a count down function with setInterval
    // If timer reaches 0, display correct answer and tick up total incorrect.
    // Reset time
    // Display next question.


































































































});