import Die from './components/Die'
import { useState, useEffect } from 'react'
import './index.css'

/**
 * Challenge:
 *

 *
 *  (Initialize
 * the state by calling our `allNewDice` function so it
 * loads all new dice as soon as the app loads)
 *
 * Map over the state numbers array to generate our array
 * of Die elements and render those in place of our
 * manually-written 10 Die elements.
 */

function App() {
	const [diceNumbers, setDiceNumbers] = useState(allNewDice())

	function allNewDice() {
		const diceArray = []

		for (let i = 0; i < 10; i++) {
			const randomNumber = Math.floor(Math.random() * 6) + 1
			diceArray.push(randomNumber)
		}

		return diceArray
	}

	function handleReRoll() {
		const newNumbers = allNewDice()
		setDiceNumbers(newNumbers)
	}



	const diceComponents = diceNumbers.map((number, index) => <Die key={index} value={number.toString()} />)

	return (
		<>
			<main>
				<div className="container">{diceComponents}</div>
				<button onClick={handleReRoll} className="roll">
					Roll
				</button>
			</main>
		</>
	)
}

export default App
