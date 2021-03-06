import "babel-polyfill"

import React from 'react'
import ReactDOM from 'react-dom'
// import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension';

import rootSaga from './sagas'
import Counter from './Counter'
import reducer from './reducers'
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducer,
  // applyMiddleware(sagaMiddleware)
  composeWithDevTools(
    applyMiddleware(sagaMiddleware)
  )
)

sagaMiddleware.run(rootSaga);

const action = type => store.dispatch({type})
function render() {
  ReactDOM.render(
    <Counter
      value={store.getState()}
      onIncrement={() => action('INCREMENT')}
      onDecrement={() => action('DECREMENT')}
      onIncrementAsync={() => action('INCREMENT_ASYNC')} />,
    document.getElementById('root')
  )
}

render()
store.subscribe(render)
