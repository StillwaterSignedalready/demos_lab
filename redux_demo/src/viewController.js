import React from 'react'

class Controller extends React.Component{

	state = {
		number: 1
	}

	render(){
		return (
			<h1>
				{this.state.number}
			</h1>
		)
	}
}

export default Controller