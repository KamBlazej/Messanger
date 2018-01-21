/*eslint-disable no-unused-vars*/
import "@babel/polyfill"

import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import sagaMonitor from '../../sagaMonitor'

import Counter from './components/Counter'
import Container from './components/Container'
import ListenerMessages from './components/ListenerMessages'
import ListenerChannels from './components/ListenerChannels'

import Fire from './components/Fire'
import reducer from './reducers'
import rootSaga from './sagas'

import styles from './index.css'

//require('./bootstrap/css/bootstrap.css');
//require('./index.css');

const sagaMiddleware = createSagaMiddleware({sagaMonitor})
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(rootSaga)

const action = (type, data) => 
  {
    store.dispatch({type,data})
  }

/*
 <Counter
          value={store.getState()}
          onIncrement={() => action('INCREMENT')}
          onDecrement={() => action('DECREMENT')}
          onIncrementIfOdd={() => action('INCREMENT_IF_ODD')}
          onIncrementAsync={() => action('INCREMENT_ASYNC')} />
*/

function render() {
  ReactDOM.render(
    <div>
       <ListenerChannels store={store.getState()} db={Fire} action={action}/>
       <ListenerMessages store={store.getState()} db={Fire} action={action}/>
        <Container store={store.getState()} db={Fire} action={action}/>
        
      </div>,
    document.getElementById('root')
  )
}

render()
store.subscribe(render)
