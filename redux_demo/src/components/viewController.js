import React from 'react'
import Book from './Book'

class Controller extends React.Component{

	render(){
		return (
			<div>
				<h1>
					{this.props.state.number}
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
				{this.props.state.books.map(book => <Book book={book} key={book.id} />)}
			</div>
		)
	}
}

export default Controller