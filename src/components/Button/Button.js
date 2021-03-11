import React, { Component } from "react"
import styles from "./button.module.css"

class Button extends Component {
	render() {
		return (
			<button className={styles.button} onClick={this.props.onClick}>
				{this.props.text}
			</button>
		)
	}
}

export default Button
