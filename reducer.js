const incrementAction = { type: 'increment', amount: 5 };
const decrementAction = { type: 'decrement', amount: 2 };

const initialState = { count : 0 };
function updateState(state, action) {
    if(action.type === 'increment'){
        return { count: state.count + action.amount };
    }else if(action.type === 'decrement'){
        return { count: state.count - action.amount };
    }else{
        return state;
    } 
} 
class Store{
    constructor(updateState, state){
        this._updateState = updateState;
        this._state = state;
        this._callbacks = [];
    }
    get state(){
        return this._state;
    }
    update(action){
        this._state = this._updateState(this._state, action);
        this._callbacks.forEach(callback => callback());
    }
    subscribe(callback){
        this._callbacks.push(callback);
        return () => this._callbacks = this._callbacks.filter(cb => cb !== callback);
    }
    
}
const store = new Store(updateState, initialState);

const unsibscribe= store.subscribe(()=> console.log('State 1 changed to ',store.state));
store.subscribe(()=> console.log('State 2 changed to ',store.state));


store.update( incrementAction );
unsibscribe();
store.update( decrementAction );
store.update({});
