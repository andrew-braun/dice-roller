import React, { Component } from "react"
import Layout from "./components/Layout/Layout"
import Die from "./components/Die/Die"
import Button from "./components/Button/Button"
import "./App.css"

class App extends Component {
	constructor(props) {
		super(props)
		this.handleRoll = this.handleRoll.bind(this)
	}

	state = {
		dieOne: 1,
	}

	handleRoll() {
		const roll = Math.floor(Math.random() * 6) + 1
		this.setState({ dieOne: roll })
		console.log(roll)
	}

	render() {
		return (
			<Layout>
				<div className="App">
					<Die number={this.state.dieOne} />
					<Button onClick={this.handleRoll} />
				</div>
			</Layout>
		)
	}
}

export default App
