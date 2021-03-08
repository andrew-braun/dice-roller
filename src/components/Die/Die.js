import React, { Component } from "react"
import * as FontAwesome from "react-icons/fa"
import styles from "./die.module.css"

class Die extends Component {
	render() {
		const numLookup = {
			1: "One",
			2: "Two",
			3: "Three",
			4: "Four",
			5: "Five",
			6: "Six",
		}

		// const die = `<FaDice${numLookup[this.props.number]} />`
		const die = React.createElement(
			FontAwesome[`FaDice${numLookup[this.props.number]}`]
		)

		return <div className={styles.die}>{die}</div>
	}
}

export default Die
