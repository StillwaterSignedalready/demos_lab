export default (prevState = 0, action) => {
	let newState = {};
	switch (action.type){
		case 'PLUS':
			newState = JSON.parse(JSON.stringify(prevState));
			++newState.number;
			return newState;
			break;
		case 'MINUS':
			newState = JSON.parse(JSON.stringify(prevState));
			--newState.number;
			return newState;
			break;
		case 'RECEIVE_RESPONSE':
			newState = JSON.parse(JSON.stringify(prevState));
			newState.books = action.payload;
			return newState;
			break;
	default:
			newState = JSON.parse(JSON.stringify(prevState));
			return newState;
	}
}

 