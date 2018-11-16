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

    // Start Game with a startGame function that's triggered when when Start Game button is clicked.
    function startGame() {
        $("#dislplayQuestion").text(game[0].question);
    }
    function nextQuestion() {
        $("#dislplayQuestion").text(game[i].question);
        $("#answer_1").text(game[i].answerChoices[0]);
        $("#answer_2").text(game[i].answerChoices[1]);
        $("#answer_3").text(game[i].answerChoices[2]);
        $("#answer_4").text(game[i].answerChoices[3]);
        console.log(game[i].answerChoices);
    }
    
    function checkAnswer(answer, currentQuestion) {
        if (answer === currentQuestion.correct) {
            alert("You Got it?");
            totalCorrect++
            i++
            nextQuestion()
        }
        else {
            totalIncorrect++
            alert("This is the corrct answer" + currentQuestion.correct);
            i++
            nextQuestion()
        }
    }

    $("#startGame").on("click", function () {
        nextQuestion();
    });

    $(".answer").on("click", function () {
        var chosenAnswer = $(this).text();

        checkAnswer(chosenAnswer, game[i])
        
    });




    // First set of questions is displayed.
    // Timer Starts
    // Displays a set of Questions each with a set of Answers.
    // Each Answer has an input type of chackbox prepended to it

    // Selection is stored in a variable

    // If user completes all selections before time is up, a button is pressed to display answers and how many are correct.
    // Number of correct Answers is added to **points**

    // Else game is stopped if timer reaches zero.

    // User is alerted that time's up.

    // Answers and how many are correct is displayed
    // Number of correct Answers added to points

    // User has option to tray another set of questions by pressing a button.


































































































});