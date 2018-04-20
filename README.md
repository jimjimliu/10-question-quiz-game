# 10 question quiz game1.0 based on react-redux


[View demo](https://jimjimliu.github.io/10-question-quiz-game/)

## Introduction
The app is an web quiz game, which gives you true false questions.
Displays answers, scores, explanations at the end of the game.
One can re-start the game at the end.

## Get Started

Dependencies already included in the project directory.
Locate the project directory, then you can run:

### `npm start`

## Technology

Implemented using react-redux. Included a light weight redux that includes necessary update actions.

## Problems To be Evolved

> ## UI 
> The design of UI can be evolved. Currently a simple interface
> displays necassary information.
> 

> ## Question Base
> Currently application holds a static question set which
> has 10 questions. Later, can include more questions in the set, and
> randomly choose amongest them. Meanwhile, shuffle the questions when
> restart.

> ## Redux 
> quiz-game-react1.0 includes light weight redux that contains
> necessary updates, and holds store that contains state as global. The
> problem is high coupling. Props are passed through each child
> component. If developing large scale application, some intermediate
> components might not need those props. But for this app, the problem
> is negligible. Better solution would be using context OR using
> provider+connect for components to fetch states more easily, states do
> not need to be passed through each intermediate components.
> Quiz-game-react2.0 uses provider+connect, to be posted.

## Notes for me
For this app, in terms of the scale, there are several choices:
1, develop without redux, hanle states within react components. abstract UI layer and state management intertwined together, once scale groups, logic becomes unclear. Needs high level state management.
2, include lightweight redux, handle all state changes in reducer.  results in lightweight components. All state changes included in reducer. easy to debug and evolve
3, use context, pvovider+connect to pass props within components.


