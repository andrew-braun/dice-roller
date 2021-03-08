import React, { Component } from "react"
import Layout from "./components/Layout/Layout"
import Die from "./components/Die/Die"
import "./App.css"

class App extends Component {
	render() {
		return (
			<Layout>
				<div className="App">
					<Die />
				</div>
			</Layout>
		)
	}
}

export default App
