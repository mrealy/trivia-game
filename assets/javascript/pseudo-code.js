// Week 5 Trivia Game pseudo code!!

// ==========================
// User interactions in order
// ==========================

// -----------------------------------------------------------
// Start Game Screen - Fixed Header and Start Game button

	// User clicks start button to change to Question screen

// -----------------------------------------------------------


// ---------------------------------------------------------------------------
// Question Screen - Fixed header, timer, question, list of answers

	// generateQuestion() function
	// displayQuestion()
	// displayanswers() (may be included in displayQuestion function)
		// User can hover over each answer to indicate currently 'targeted' option

	// 30 second timer to answer question (questionTimer function)

		// if time runs out
			// Ran out of time page State, or
			// End of round page state

		// 

		// if option is selected
			// if Correct
				// Correct Answer page state, or
				// End of round page state
			// else
				// Wrong answer page state, or
				// End of round page state


	

	// Possible page states from question screen
		// Correct Answer page State
		// Wrong Answer page State
		// Ran out of Time page state
		// End of round page state
// ----------------------------------------------------------------------------


// ----------------------------------------------------	
// Results Screen

	// ==================
	// Result page States
	// ==================

	// Correct Answer page state

		// Time until next question timer (nextQuestionTimer function)

		// 'Correct!' message

		// winCounter++;

	// Wrong Answer page state

		// Time until next question timer (nextQuestionTimer function)

		// 'Wrong!' message

		// lossCounter++;

	// Ran out of time page state

		// Time until next question timer (nextQuestionTimer function)

		// 'Ran out of time!'

		// outOfTime++;


	// End of round page state

		// 'All done, here's how you did:' message

		// 'Correct answers: ' + winCounter

		// 'Incorrect answers: ' + lossCounter

		// 'Unanswered questions: ' + outOfTime

		// Start over button

			// reset winCounter, lossCounter, outOfTime counter = 0

			// reset questions

			// go back to question screen



