export default (state = 0, action) => {
	switch (action.type){
		case 'PLUS':
			return state + 1;
			break;
		case 'MINUS':
			return state - 1;
			break;
		default:
			return state;
	}
}

 