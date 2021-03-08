import React, { Component } from "react"
import Layout from "./components/Layout/Layout"
import Die from "./components/Die/Die"
import Button from "./components/Button/Button"
import "./App.css"

class App extends Component {
	state = {
		dieOne: 1,
	}
	render() {
		return (
			<Layout>
				<div className="App">
					<Die number={this.state.dieOne} />
					<Button />
				</div>
			</Layout>
		)
	}
}

export default App
