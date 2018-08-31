import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux'
import reducer from './reducers/counter.js'

const store = createStore(reducer)

const render = () => {
  ReactDOM.render(
    <App value={ store.getState() }
         onIncrement={
           () => store.dispatch({ type: 'INCREMENT' })
         }
         onDecrement={
           () => store.dispatch({ type: 'DECREMENT' })
         }
    />,
    document.getElementById('root')
  );
}

render()

store.subscribe(render)

registerServiceWorker();
