import React from 'react'
import ReactDOM from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import Controller from './components/viewController'
import reducer from './reducers/reducer'
import {plusClicked, minusClicked, fetchBooks} from './actionCreators/actionCreator'
// middleware
import {createLogger} from 'redux-logger'
import thunk from 'redux-thunk'

const logger = createLogger();
const initState = {
	number: 10,
	books: []
}

const store = createStore(
	reducer,
	initState,
	applyMiddleware(thunk, logger)
);

const render = _ => ReactDOM.render(

	<div>
  	<h1>click</h1>
		<Controller 
			state = {store.getState()}
			onPlusClicked = {_ => store.dispatch(plusClicked())}
			onMinusClicked = {_ => store.dispatch(minusClicked())}
			onAjaxClicked = {_ => store.dispatch(fetchBooks())}
		/>
	</div>,
  document.querySelector('#wrapper')
);

render();
store.subscribe(render);
