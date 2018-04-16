import React from 'react';
import ReactDOM from 'react-dom';
import QuizGame from './quizGame';
import './CSS/index.css';
import './CSS/common.css';
import { createStore } from './redux/redux'
import { reducer } from './redux/index.redux'

const store = createStore(reducer);

function render(){
    ReactDOM.render(
		<QuizGame store={store} />,
		document.getElementById('root')
	);
}

render();
store.subscribe(render);

