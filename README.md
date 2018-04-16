# 10 question quiz game based on react-redux 1.0


[View demo]()


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
> Quiz-game-react2.0 uses provider+connect, but with there is an small
> issue in 'connect' part, so it is not runnable for now. To be fixed in
> the future.

