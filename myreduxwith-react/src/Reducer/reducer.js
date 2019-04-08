const Reducer = (state, action) => ({ 
    'increment': { count: state.count + action.amount },
    'decrement': { count: state.count - action.amount },
    'default': state
})[action.type]
export default Reducer;
