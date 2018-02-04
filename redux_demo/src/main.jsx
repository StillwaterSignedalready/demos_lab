import React from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'
import Controller from './components/viewController'
import reducer from './reducers/reducer'
import {plusClicked, minusClicked} from './actionCreators/actionCreator'

const store = createStore(reducer, 11);
console.log(reducer);

const render = _ => ReactDOM.render(

	<div>
  	<h1>click</h1>
		<Controller 
			state = {store.getState()}
			onPlusClicked = {_ => store.dispatch(plusClicked())}
			onMinusClicked = {_ => store.dispatch(minusClicked())}
		/>
	</div>,
  document.querySelector('#wrapper')
);

render();
store.subscribe(render);
