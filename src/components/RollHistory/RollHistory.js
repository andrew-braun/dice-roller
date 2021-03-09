import React, { Component } from "react"
import styles from "./roll-history.module.css"

class RollHistory extends Component {
	render() {
		const rolls = this.props.rolls.map((roll) => (
			<li>
				<span>{roll.join(" ")}</span>
				&nbsp;
				<span>{roll.reduce((die, acc) => acc + die)}</span>
			</li>
		))
		return (
			<div className={styles.rollHistoryContainer}>
				<ul className={styles.rollsList}>{rolls}</ul>
			</div>
		)
	}
}

export default RollHistory
