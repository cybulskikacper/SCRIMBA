import Die from './components/Die'
import { useState, useEffect } from 'react'
import { nanoid } from 'nanoid'

//  * Then, figure out how to pass that function down to each
//  * instance of the Die component so when each one is clicked,
//  * it logs its own unique ID property. (Hint: there's more
//  * than one way to make that work, so just choose whichever
//  * you want)
//  *

export default function App() {
	const [numbers, setNumbers] = useState([])

	useEffect(() => {
		allNewDice()
	}, [])

	function allNewDice() {
		const arr = []

		for (let i = 0; i < 10; i++) {
			const randomNumber = Math.floor(Math.random() * 6) + 1
			arr.push({
				value: randomNumber,
				isHeld: false,
				id: nanoid(),
			})
		}
		setNumbers(arr)
	}

	function handleAllNewDice() {
		allNewDice()
	}

	function holdDice(id) {
		console.log(id)
	}

	const diceComponents = numbers.map(number => (
		<Die key={number.id} value={number.value.toString()} isHeld={number.isHeld} id={number.id} holdDice={holdDice} />
	))

	return (
		<main>
			<div className="container">{diceComponents}</div>

			<button onClick={handleAllNewDice} className="roll">
				Roll
			</button>
		</main>
	)
}
