import React, { Component } from "react"
import styles from "./roll-history.module.css"

class RollHistory extends Component {
	render() {
		const rolls = this.props.rolls.join(", ")
		return <div className={styles.rollHistoryContainer}>{rolls}</div>
	}
}

export default RollHistory
