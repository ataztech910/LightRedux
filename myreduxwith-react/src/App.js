import React, { Component } from 'react';
import './App.css';
import Store from './Reducer/store';
import Reducer from './Reducer/reducer';
import { incrementAction, decrementAction } from './Reducer/actions';
const initialState = { count : 0 };
const store = new Store(Reducer, initialState);

class App extends Component {
  componentDidMount(){
    store.subscribe( () => this.forceUpdate() );
  }
  increment = () => {
    store.update(incrementAction);
  } 
  decrement = () => {
    store.update(decrementAction);
  } 
  render() {
    const { count } = store.state;
    return (
      <div className="App">
        <div className="App-header">
         <div className="result">{ count }</div>
         <div className="buttons"> 
          <button className="button" onClick={this.increment}>+</button>
          <button className="button" onClick={this.decrement}>-</button>
         </div>
        </div>
      </div>
    );
  }
}
export default App;
