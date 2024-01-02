import { useState } from 'react'

// CSS

import './App.css'

// React

import Count from './components/Count'
function App() {
	const [count, setCount] = useState(0)

	function add() {
		setCount(prevCount => prevCount + 1)
	}

	function subtract() {
		setCount(prevCount => prevCount - 1)
	}

	console.log('App component rendered ')

	return (
		<div className="counter">
			<button className="counter--minus" onClick={subtract}>
				–
			</button>

			<Count number={count} />

			<button className="counter--plus" onClick={add}>
				+
			</button>
		</div>
	)
}

export default App
