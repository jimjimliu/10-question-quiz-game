import React from 'react';
var PropTypes = require('prop-types');

/*
quiz screen;
*/
function Quiz(props) {

	return (
		<div className="container">
			<Question
			  category = {props.category}
			  question={props.question}
			  counter = {props.questionId}
			  total = {props.questionTotal}
			/>

			<ChoiceList 
			onAnswerSelected = {props.onAnswerSelected}
			answerChoice = {props.answerChoice}
			/>

		</div>
	);
}
/*
components displays current question;
*/
function Question(props) {
	return (
		<div>
		<h2 className="question"><span>Category: {props.category} </span></h2>
	   <h2 className="question"><span>Q{props.counter} of {props.total}: </span>{props.question}</h2>
		</div>
	);

}

/*
components displays true/false choice panel;
*/
function ChoiceList(props) {
	return (
		<ul className="answerList">

			<li className="answerChiocePanel"
					id={props.answerChoice[0].score} 
					value = {props.answerChoice[0].score}
					onClick={props.onAnswerSelected}
			>
				  
				  <label className="answerLabel">
					True
				  </label>

			</li>
			<li className="answerChiocePanel"
					id={props.answerChoice[1].score} 
					value = {props.answerChoice[1].score}
					onClick={props.onAnswerSelected}
			>
				  
				  <label className="answerLabel">
					False
				  </label>

			</li>
		</ul>
	);
}

Quiz.propTypes = {
	category: PropTypes.string.isRequired,
	answer: PropTypes.string.isRequired,
	answerChoice: PropTypes.array.isRequired,
	question: PropTypes.string.isRequired,
	questionId: PropTypes.number.isRequired,
	questionTotal: PropTypes.number.isRequired,
	onAnswerSelected: PropTypes.func.isRequired, 
	counter: PropTypes.number.isRequired,
	total: PropTypes.number.isRequired
};

export default Quiz;
