import React, { Component } from "react"
import styles from "./layout.module.css"

class Layout extends Component {
	render() {
		return (
			<React.Fragment>
				<header className={styles.header}>
					<h1>Dice Roller</h1>
				</header>
				<main className={styles.main}>{this.props.children}</main>
				<footer className={styles.footer}>
					Made with{" "}
					<span role="img" aria-label="heart-emoji">
						❤️
					</span>
					by Andrew Braun
				</footer>
			</React.Fragment>
		)
	}
}

export default Layout
