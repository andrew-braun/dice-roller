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
		dieTwo: 1,
	}

	rollDice(sides) {
		const roll = Math.floor(Math.random() * sides) + 1
		return roll
	}

	handleRoll() {
		this.setState({ dieOne: this.rollDice(6), dieTwo: this.rollDice(6) })
	}

	render() {
		return (
			<Layout>
				<div className="App">
					<Die number={this.state.dieOne} />
					<Die number={this.state.dieTwo} />
					<Button onClick={this.handleRoll} />
				</div>
			</Layout>
		)
	}
}

export default App
