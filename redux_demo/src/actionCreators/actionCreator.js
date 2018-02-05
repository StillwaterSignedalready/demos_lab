/**
 * return an action
 * @param  {[type]} _ [description]
 * @return {[type]}   [description]
 */
import {getAll} from './BooksAPI'

export const plusClicked = _ => ({
	type: 'PLUS'
})

export const minusClicked = _ => ({
	type: 'MINUS'
})

const sendRequest = _ => ({
	type: 'REQUEST'
})

const receiveResponse = payload => ({
	type: 'RECEIVE_RESPONSE',
	payload
})

export const fetchBooks = _ => {
	// 中间件thunk会将dispatch和getState传给该函数
	// 该函数作为action 的替代品
	return (dispatch, getState) => {
		dispatch(sendRequest())
		return getAll()
		.then(books => {console.log(books); dispatch(receiveResponse(books))})
	}
}