import {combineReducers} from 'redux'

/**
 * return a number
 * @param  {Number} prevState state.number
 * @param  {obj} action    without payload
 * @return {[type]}           newState
 */
const mathReducer = (prevState = 0, action) => {
	switch (action.type){
		case 'PLUS':
			return prevState + 1;
			break;
		case 'MINUS':
			return prevState - 1;
			break;
	default:
			return prevState;
	}
}

/**
 * request several books from server - first action
 * receive several books from server - second action
 * @param  {Array} prevState [description]
 * @param  {[type]} action    [description]
 * @return {[type]}           [description]
 */
const ajaxReducer = (prevState = 0, action) => {
	let newState = {};
	switch (action.type){
		case 'RECEIVE_RESPONSE':
			newState = action.payload;
			return newState;
			break;
	default:
			newState = JSON.parse(JSON.stringify(prevState));
			return newState;
	}
}

const reducer = combineReducers({
	number: mathReducer, 
	books: ajaxReducer
})
export default reducer
 