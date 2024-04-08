import Die from './components/Die'
import { useState, useEffect } from 'react'
import { nanoid } from 'nanoid'

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
				isHeld: true,
				id: nanoid(),
			})
		}
		setNumbers(arr)
	}

	function handleAllNewDice() {
		allNewDice()
	}

	const diceComponents = numbers.map(number => (
		<Die key={number.id} value={number.value.toString()} isHeld={number.isHeld} />
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
