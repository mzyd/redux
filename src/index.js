import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux'
import reducer from './reducers/counter.js'
import { increment, decrement } from './actions'

const store = createStore(reducer)

const render = () => {
  ReactDOM.render(
    <App value={ store.getState() }
         onIncrement={
           () => store.dispatch(increment())
         }
         onDecrement={
           () => store.dispatch(decrement())
         }
    />,
    document.getElementById('root')
  );
}

render()

store.subscribe(render)

registerServiceWorker();
