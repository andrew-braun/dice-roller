import React, { Component } from "react"
import {
	FaDiceOne,
	FaDiceTwo,
	FaDiceThree,
	FaDiceFour,
	FaDiceFive,
	FaDiceSix,
} from "react-icons/fa"
import styles from "./die.module.css"

class Die extends Component {
	render() {
		return (
			<div className={styles.die}>
				<FaDiceOne />
			</div>
		)
	}
}

export default Die
