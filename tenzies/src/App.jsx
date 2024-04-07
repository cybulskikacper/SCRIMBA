import Die from './components/Die'
import { useState, useEffect } from 'react'

/**
 * Challenge:
 *
 * Create state to hold our array of numbers. (Initialize
 * the state by calling our `allNewDice` function so it
 * loads all new dice as soon as the app loads)
 *
 * Map over the state numbers array to generate our array
 * of Die elements and render those in place of our
 * manually-written 10 Die elements.
 */

export default function App() {
	const [numbers, setNumbers] = useState([])

	useEffect(() => {
		allNewDice()
	}, [])

	function allNewDice() {
		const arr = []

		for (let i = 0; i < 10; i++) {
			const randomNumber = Math.floor(Math.random() * 6) + 1
			arr.push(randomNumber)
		}
		setNumbers(arr)
	}

	function handleAllNewDice() {
		allNewDice()
	}

	const diceComponents = numbers.map((number, index) => <Die key={index} value={number.toString()} />)

	return (
		<main>
			<div className="container">{diceComponents}</div>

			<button onClick={handleAllNewDice} className="roll">
				Roll
			</button>
		</main>
	)
}
