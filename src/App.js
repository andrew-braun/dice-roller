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
		this.handleAddDie = this.handleAddDie.bind(this)
		this.handleDeleteDie = this.handleDeleteDie.bind(this)
	}

	state = {
		diceValues: [1, 1],
		rollHistory: [],
		currentDice: [],
	}

	rollDice(sides) {
		const roll = Math.floor(Math.random() * sides) + 1
		return roll
	}

	generateDice() {
		const currentDice = this.state.diceValues.map((die, index) => (
			<Die
				number={die}
				onClick={this.handleDeleteDie}
				key={`die-${this.state.rollHistory.length + index}`}
			/>
		))

		this.setState({ currentDice: currentDice })
	}

	handleRoll() {
		try {
			let newDiceValues = []

			for (let i = 0; i < this.state.diceValues.length; i++) {
				newDiceValues.push(this.rollDice(6))
			}

			this.setState(
				{
					diceValues: newDiceValues,
					rollHistory: [...this.state.rollHistory, newDiceValues],
				},
				() => {
					this.generateDice()
				}
			)
		} catch (error) {
			console.log(error)
		}
	}

	componentDidMount() {
		this.generateDice()
	}

	handleAddDie() {
		this.setState(
			{
				diceValues: [...this.state.diceValues, 1],
			},
			() => {
				this.generateDice()
			}
		)
	}

	handleDeleteDie() {
		const valuesLength = this.state.diceValues.length

		const deletedArray =
			valuesLength > 1
				? this.state.diceValues.slice(0, this.state.diceValues.length - 1)
				: this.state.diceValues

		this.setState(
			{
				diceValues: deletedArray,
			},
			() => {
				this.generateDice()
			}
		)
	}
	render() {
		return (
			<Layout>
				<div className={styles.app}>
					<div className={styles.rollContainer}>
						<div className={styles.diceContainer}>{this.state.currentDice}</div>
						<Button onClick={this.handleRoll} text="Roll!" />
						<Button onClick={this.handleAddDie} text="Add Die" />
					</div>
					<div className={styles.rollHistoryContainer}>
						<RollHistory rolls={this.state.rollHistory} />
					</div>
				</div>
			</Layout>
		)
	}
}

export default App
