import React, { Component } from "react"
import styles from "./roll-history.module.css"

class RollHistory extends Component {
	render() {
		const rolls = this.props.rolls.map((roll) => (
			<li className={styles.rollItem}>
				<span className={styles.rollItemDieContainer}>
					{roll.map((die) => (
						<span className={styles.rollItemDie}>{die}</span>
					))}
				</span>
				<span className={styles.diceSum}>
					{roll.reduce((die, acc) => acc + die)}
				</span>
			</li>
		))
		return (
			<div className={styles.rollHistory}>
				<h2 className={styles.rollHistoryHeader}>Roll History</h2>
				<ul className={styles.rollsList}>{rolls}</ul>
			</div>
		)
	}
}

export default RollHistory
