import React from 'react'

class Controller extends React.Component{

	render(){
		console.log(this.props.state);
		return (
			<h1>
				0
			</h1>
			<div>
				<button>PLUS</button>
				<button>MINUS</button>
			</div>
		)
	}
}

export default Controller