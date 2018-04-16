import questions from '../questionBase/question';

// reducer
export function reducer(state, action) {
    switch (action.type) {
        case 'NEXT':
            state.questionId = state.questionId+1;
            state.counter += 1;
			state.category = questions[state.counter].category;
            state.question = questions[state.counter].question;
            state.answerChoice = questions[state.counter].choice;//set each choice's score i.e. true is 0, false is 1;
            return state
        
        case 'SCORE':
            state.score = state.score+1
            return state
            
        case 'RESTART':
            state.score = 0
            state.counter = 0
            state.questionId = 1
			state.category = questions[0].category
            state.question = questions[0].question
            state.answerChoice = questions[state.counter].choice
            state.feedback = feedback()
            return state
            
        case 'MARK':
            state.feedback[state.counter].fontColor = 'red'
            return state
            
        default:
            state = {
				category: '',
                counter: 0,
                questionId: 1,
                question: '',
                answerChoice: [],
                score: 0,
                total: questions.length,
                feedback: feedback()
            }
            
			state.category = questions[0].category;
            state.question = questions[0].question;
            state.answerChoice = questions[state.counter].choice;
            return state
    }
}

/*
return an array [{question+correct answer, color to display the question}, {...}
*/
function feedback(){
    var output = [];
    var length = questions.length;
    
    for(var i=0; i< length; i++){
        var item = questions[i];
      
        var array = {
			questionId: i+1,
            feedback: item.question+" Correct answer: "+item.answer,
			explanation: item.explanation,
            fontColor: 'black'
        };
        output.push(array);
    }
    return output;
}

/*
accumulate score, question id, set next question, set next question's choice score;
*/
export function next() {
    return {type: 'NEXT'}
}
/*
reset state, reset game
*/
export function re_start(){
    return {type: 'RESTART'}
}
/*
add total score;
*/
export function accumulate_score(value){
    return {type: 'SCORE'}
}
/*
if answer is incorrect, mark the color to red for components to render when game is finished;
*/
export function mark_incorrect(){
    return {type: 'MARK'}
}



