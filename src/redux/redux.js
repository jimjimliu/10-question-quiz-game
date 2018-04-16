

export function createStore(reducer) {
    let initialState = {}
    let currentListeners = []
    
    function getState() {
        initialState = reducer(initialState, {type:'default'})
        return initialState
    }
    function subscribe(listener) {
        currentListeners.push(listener)
    }
    function dispatch(action) {
        initialState = reducer(initialState, action)
        currentListeners.forEach(v => v())
        return action
    }
    dispatch({type: 'start_action'})  //initial state
    return { getState, subscribe, dispatch}
}

