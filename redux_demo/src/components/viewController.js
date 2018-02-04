import React from 'react'

class Controller extends React.Component{

	render(){
		return (
			<div>
				<h1>
					{this.props.state}
				</h1>
				<div>
					<button onClick={this.props.onPlusClicked}>
						PLUS
					</button>
					<button onClick={this.props.onMinusClicked}>
						MINUS
					</button>
					<button onClick={this.props.onAjaxClicked}>
						Ajax
					</button>
				</div>
			</div>
		)
	}
}

export default Controller