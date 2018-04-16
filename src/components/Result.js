import React from 'react';
var PropTypes = require('prop-types');

/*
result screen;
*/
function renderFeedBack(key) {
        return (
          <FeedBack
            feedBack = {key.feedback}
			explanation = {key.explanation}
			fontStyle = {key.fontColor}
          />
        );
      }

function FeedBack(props) {
	return (
		<div>
	  		Question: <strong style={{color:props.fontStyle}}>{props.feedBack}</strong>
			<p>Do you know: {props.explanation}</p>
			<p>-------------------------------------------------------------</p>
	    </div>
	);
}

function Result(props) {

  return (
    <div className="container result">
      <div>
        Your score is <strong>{props.quizResult} (out of {props.feedBack.length}).</strong> Red inidcating questions you answered incorrect.
      </div>
	  <br />
	  <div>
	  	{props.feedBack.map(renderFeedBack)}
	  </div>
	  <br />
	  <center><button type='button' onClick={props.startAgainOption}>start again</button></center>
    </div>
  );

}


Result.propTypes = {
  feedBack: PropTypes.array.isRequired,
  quizResult: PropTypes.number.isRequired,
  startAgainOption: PropTypes.func.isRequired,
  fontStyle: PropTypes.string.isRequired
};

export default Result;
