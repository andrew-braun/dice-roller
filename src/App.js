import React, { Component } from "react"
import Layout from "./components/Layout/Layout"
import Die from "./components/Die/Die"
import Button from "./components/Button/Button"
import RollHistory from "./components/RollHistory/RollHistory"
import styles from "./app.module.css"

class App extends Component {
	constructor(props) {
		super(props)
		this.handleRoll = this.handleRoll.bind(this)
	}

	state = {
		dieOne: 1,
		dieTwo: 1,
		rollHistory: [],
	}

	rollDice(sides) {
		const roll = Math.floor(Math.random() * sides) + 1
		return roll
	}

	handleRoll() {
		const rollOne = this.rollDice(6)
		const rollTwo = this.rollDice(6)

		this.setState({
			dieOne: rollOne,
			dieTwo: rollTwo,
			rollHistory: [...this.state.rollHistory, [rollOne, rollTwo]],
		})
	}

	render() {
		return (
			<Layout>
				<div className={styles.app}>
					<div className={styles.diceContainer}>
						<Die number={this.state.dieOne} />
						<Die number={this.state.dieTwo} />
					</div>
					<Button onClick={this.handleRoll} />
					<RollHistory rolls={this.state.rollHistory} />
					{/* {this.state.rollHistory.join(",")} */}
				</div>
			</Layout>
		)
	}
}

export default App
