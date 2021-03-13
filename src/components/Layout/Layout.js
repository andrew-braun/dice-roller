import React, { Component } from "react"
import styles from "./layout.module.css"

class Layout extends Component {
	render() {
		return (
			<div className={styles.layout}>
				<header className={styles.header}>
					<h1>Let's Roll!</h1>
				</header>
				<main className={styles.main}>{this.props.children}</main>
				<footer className={styles.footer}>
					Made with{" "}
					<span role="img" aria-label="heart-emoji">
						❤️
					</span>
					by Andrew Braun
				</footer>
			</div>
		)
	}
}

export default Layout
