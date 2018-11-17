console.log("is this working");
$(document).ready(function () {

    // Global Variable
    // Questions and Answers objects

    var questions = [
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

    ];

    var timer;

    var game = {

        // Correctly Answered Total
        totalCorrect: 0,

        // Incorrect Total
        totalIncorrect: 0,

        // Total number of quetions
        // numberOfQuestionsAsked: totalCorrect + totalIncorrect,

        // Index variable
        i: 0,

        timeAloted: 120,
        
        
        
        // Game sarts when start button is pressed.

        start: function () {
            timer = setInterval(game.countdown, 1000);
            $("#timer").html(game.timeAloted);
            // // for (i = 0; i <= questions.length; i++) {
            //     $("#dislplayQuestion").text(questions[i].question);
            //     $("#answer_1").text(questions[i].answerChoices[0]);
            //     $("#answer_2").text(questions[i].answerChoices[1]);
            //     $("#answer_3").text(questions[i].answerChoices[2]);
            //     $("#answer_4").text(questions[i].answerChoices[3]);
            //     console.log(questions[i].answerChoices);
            //     console.log(questions.length);
            // // }
            
        },
       
        countDown: function() {
            game.timeAloted--;
            
            if (game.timeAloted === 0) {
                nextQuestion();
                totalIncorrect++;
                console.log("Times Up")
            }
        },

    }
    // game.start();

    

    // Displays questions from object array

    function nextQuestion() {
        for (i = 0; i <= game.length; i++) {
            $("#dislplayQuestion").text(game[i].question);
            $("#answer_1").text(game[i].answerChoices[0]);
            $("#answer_2").text(game[i].answerChoices[1]);
            $("#answer_3").text(game[i].answerChoices[2]);
            $("#answer_4").text(game[i].answerChoices[3]);
            console.log(game[i].answerChoices);
            console.log(game.length);
        }
    };

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
        game.start();
    });

    // Recieves answer chosen
    $(".answer").on("click", function () {
        var chosenAnswer = $(this).text();
        checkAnswer(chosenAnswer, questions[i])
        console.log(chosenAnswer);

    });

    // Checks to see if you've run out of questions
    // if (numberOfQuestionsAsked >= game.length) {
    //     alert("That's it. Thanks for playing");

    // }

    // Creat a count down function with setInterval
    // If timer reaches 0, display correct answer and tick up total incorrect.
    // Reset time
    // Display next question.


































































































});