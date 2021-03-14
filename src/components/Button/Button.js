import React, { Component } from "react"
import styles from "./button.module.css"

class Button extends Component {
	render() {
		const classNames = `${styles.button} ${styles[this.props.class] ?? ""}`
		return (
			<button className={classNames} onClick={this.props.onClick}>
				{this.props.text}
			</button>
		)
	}
}

export default Button
