$(document).ready(function() {

	var winCounter = 0;
	var lossCounter = 0;
	var outOfTime = 0;
	var questionCounter;
	var questionTimeout;
	var questionInterval;
	var seconds;
	var currentQuestion;
	var currentAnswer;

	var triviaQuestions = new Array ( );

	triviaQuestions[0] = {
		ask: 'Which of the following items was owned by the fewest U.S. homes in 1990?',
		options: ['home computer', 'compact disk player', 'chordless phone', 'dishwasher'],
		answer: 1
	}

	triviaQuestions[1] = {
		ask: 'Which of these characters turned 40 years old in 1990?',
		options: ['Charlie Brown', 'Bugs Bunny', 'Mickey Mouse', 'Fred Flintstone'],
		answer: 0
	}

	triviaQuestions[2] = {
		ask: 'Is this even a real question?',
		options: ['I don\'t have a real answer.', 'This is clearly a test.', 'Why wouldn\'t it be?', 'Next question.'],
		answer: 1
	}


	function initialize() {
		winCounter = 0;
		lossCounter = 0;
		outOfTime = 0;
		questionCounter = 0;
		questionScreen();
	}

	initialize();

	function displayQuestion(currentQuestion) {
		$('Body').append('Current Question is: ').append(currentQuestion.ask);
	}	

	// print question
	// console.log(triviaQuestions.question1.ask);

	function getQuestion() {
		currentQuestion = triviaQuestions[Math.floor(Math.random() * triviaQuestions.length)];
		//console.log('Current question in getQuestion() is ' + currentQuestion.ask);
		return currentQuestion;
	}

	function questionScreen() {
		clearBody();
		stopTime();
		questionCounter++;
		console.log(questionCounter);
		questionTimer();
		getQuestion(currentQuestion);
		displayQuestion(currentQuestion);
		displayAnswers();
		enableAnswerClicks();
	}

	function clearBody() {
		$('body').html('<div class="divHeader"> </div>');
		$('body').append('<div class="divBody"> </div>');
	}

	function correctAnswerScreen() {
		clearBody();
		stopTime();
		winCounter++;
		nextQuestionTimer();
		var currentAnswer = currentQuestion.answer;
		$('body').append('<p> Nice job! </p>');
		

	}

	function incorrectAnswerScreen() {
		clearBody();
		stopTime();
		lossCounter++;
		nextQuestionTimer();
		var currentAnswer = currentQuestion.answer;
		$('body').append('<p> Nope! The correct answer is ' + currentQuestion.options[currentAnswer] + '. </p>');
	}

	function outOfTimeScreen() {
		clearBody();
		stopTime();
		outOfTime++;
		nextQuestionTimer();
		var currentAnswer = currentQuestion.answer;
		$('body').append('Ouf of time! The correct answer is ' + currentQuestion.options[currentAnswer] + '. </p>')
	}

	function endOfRoundScreen() {
		clearBody();
		stopTime();
		console.log('endOfRoundScreen is called');
		$('body').append('<p> Correct Answers: ' + winCounter + '</p>');
		$('body').append('<p> Incorrect Answers: ' + lossCounter + '</p>');
		$('body').append('<p> Unanswered: ' + outOfTime + '</p>');
		$('body').append('<button class="newRound"> Start Over? </button>');
		$('.newRound').on('click', initialize);
	}

	function displayAnswers() {
		// creates four divs with classes .option0 through .option3 that list answers.
		for (i = 0; i < 4; i++) {
			$('Body').append('<div class="option' + i + '"> </div>');
			//$('.divBody').append('<br>' + triviaQuestions.question1.options[0]);
			$('.option' + i).append(currentQuestion.options[i]);
		}	
	}

	function enableAnswerClicks() {
		
		$('.option0').click(function() {
			console.log('option0 has been clicked');
			if (currentQuestion.answer === 0) {
				// correct page state or end of round page state
				correctAnswerScreen();
			} else{
				clearBody();
				console.log('Wrong!!');
				incorrectAnswerScreen();
			}
		});

		$('.option1').click(function() {
			console.log('option1 has been clicked');
			if (currentQuestion.answer === 1) {
				correctAnswerScreen();
			} else{
				clearBody();
				console.log('Wrong!!');
				incorrectAnswerScreen();
			}
		});

		$('.option2').click(function() {
			console.log('option2 has been clicked');
			if (currentQuestion.answer === 2) {
				correctAnswerScreen();
			} else{
				clearBody();
				console.log('Wrong!!');
				incorrectAnswerScreen();
			}
		});

		$('.option3').click(function() {
			console.log('option3 has been clicked');
			if (currentQuestion.answer === 3) {
				correctAnswerScreen();
			} else{
				clearBody();
				console.log('Wrong!!');
				incorrectAnswerScreen();
			}
		});

	}

	function displayQuestionTimerSeconds(i) {
		$('.divBody').html('<div class="seconds"> </div>');
		$('.seconds').html('<p> You have ' + i + ' seconds left to guess! Click to choose. </p>');
	}

	function displayNextQuestionTimerSeconds(i) {
		$('.divBody').html('<div class="seconds"> </div>');
		$('.seconds').html('<p> You have ' + i + ' seconds left until the next question. </p>');
	}

	function stopTime() {
		clearInterval(questionInterval);
		clearTimeout(questionTimeout);
		seconds = 0;
	}
	// 15 second timer function
	function questionTimer() {
		questionTimeout = setTimeout(function() {
			console.log('Out of time!');
			outOfTimeScreen();
		}, 1000 * 15);

		seconds = 15;
		console.log(seconds + ' second timer initiated.');
		displayQuestionTimerSeconds(seconds);

		if (seconds > 0) {
			questionInterval = setInterval(function(){
					seconds--;
					//console.log(seconds + ' seconds left.');
					displayQuestionTimerSeconds(seconds);
			}, 1000);
		}
	}	
	// 3 second timer function
	function nextQuestionTimer() {
		questionTimeout = setTimeout(function() {
			console.log('Out of time!');
			console.log(questionCounter);
			if (questionCounter < 3) {
				questionScreen();
			} else{
				endOfRoundScreen();
			}
		}, 1000 * 3);

		seconds = 3;
		console.log(seconds + ' second timer initiated.');
		displayNextQuestionTimerSeconds(seconds);

		if (seconds > 0) {
			questionInterval = setInterval(function(){
					seconds--;
					//console.log(seconds + ' seconds left.');
					displayNextQuestionTimerSeconds(seconds);
			}, 1000);
		}
	}

});