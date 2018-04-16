import React, { Component } from 'react';
import Quiz from './components/Quiz';
import Result from './components/Result';
import {next, re_start, accumulate_score, mark_incorrect} from './redux/index.redux';


class QuizGame extends Component {

	constructor(props) {
		super(props);

		this.state = {start: false, stop: false}; //initial start state, stop state, does not need to be global;
		this.store = this.props.store; 
		this.num = this.store.getState();//global state

		/*
		bind onClick functions;
		*/
		this.handleOnClick = this.handleOnClick.bind(this);
		this.startAgain = this.startAgain.bind(this);
		this.startQuiz = this.startQuiz.bind(this);
	}
	
	/*
	check condition by using questionId, OR counter;
	if reached last questioin, display result screen;
	otherwise, render next question;
	*/
	handleOnClick(event) {
		const id = this.num.questionId;
		const total = this.num.total;

		this.calculateScore(event.currentTarget.value);
		if(id < total){
			this.renderNextQuestion();
		}
		else{
			this.stopQuiz();
		}

	}
	/*
	restart the game;
	*/
	startAgain(event) {
		this.store.dispatch(re_start());
		this.setState({stop:false});
	}

	/*
	inform reducer to update state;
	if clicked annswer is correct, accumulate score,
	otherwise, mark the question as answered incorrect;
	*/
	calculateScore(value) {
	  if(value == 1){
		  this.store.dispatch(accumulate_score(value));
	  }
	  else{
		  this.store.dispatch(mark_incorrect());
	  }
	}

	/*
	render next question, inform reducer to 
	*/
	renderNextQuestion() {
	  	this.store.dispatch(next());
	}

	/*
	set result to indicate stop;
	*/
	stopQuiz() {
		this.setState({stop: true});
	}

	renderQuiz() {
		return (
		  <Quiz
			category={this.num.category}
			answerChoice={this.num.answerChoice}
			questionId = {this.num.questionId}
			question={this.num.question}
			questionTotal={this.num.total}
			onAnswerSelected={this.handleOnClick}
		  />
		);
	}

	renderResult() {
	return (
	  <Result 
		quizResult={this.num.score}
		feedBack = {this.num.feedback}
		startAgainOption = {this.startAgain}
	  />
	);
	}

	startQuiz(){
		this.setState({start:true});
	}

	/*
	check state start condition, if false, indicates to display welcome page first;
	otherwise, display quiz screen;
	*/
	render() {
	  if(this.state.start == false) {
		  return (
			  <div className="container result" style={{marginTop:200}}>
				  <h3 className="introMessage">
					Welcome to the Trivia Challenge!<br/>You will be presented with 10 True or False Questions.
					<br/>Can you score 100%?</h3>
				  <center><button type="button" onClick={()=>this.startQuiz()}>start quiz</button></center>
			  </div>
		  );
	  }
	return (
	  <div>
		{this.state.stop ? this.renderResult() : this.renderQuiz()}
	  </div>
	);
	}

}

export default QuizGame;
