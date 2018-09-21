import React, { Component } from 'react'

class FloatyPhone extends Component {
	constructor(props) {
		super(props)
		this.state = {
			left: -20
		}
		this.bounceIn = this.bounceIn.bind(this)

	}
	componentDidMount() {
		setTimeout(100000, this.bounceIn());
	}

	bounceIn() {
		this.setState({
			left: 200
		})
	}

	render() {
		const style = {
			position: 'absolute',
			width: 100,
			height: 100,
			backgroundColor: 'red',
			top:500,
			left: this.state.left,
			transition: 'all 0.8s ease-in'
		}
		const myStyle = {
			width: '500px',
			height: '500px'
		};

		return (
			<div className="floaty" style={style}> Telefone Heare </div>
		)
	}
}

export default FloatyPhone