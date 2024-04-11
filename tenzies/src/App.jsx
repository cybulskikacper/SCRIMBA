import Die from './components/Die'
import { useState, useEffect } from 'react'
import { nanoid } from 'nanoid'

export default function App() {
	const [numbers, setNumbers] = useState([])
	const [tenzies, setTenzies] = useState(false)

	/**
	 * Challenge: Check the dice array for these winning conditions:
	 * 1. All dice are held, and
	 * 2. all dice have the same value
	 *
	 * If both conditions are true, set `tenzies` to true and log
	 * "You won!" to the console
	 */

	function checkForTenzies(numbers) {
		if (numbers.length === 0) return false

		const firstValue = numbers[0].value

		return numbers.every(number => number.length === firstValue)
	}

	useEffect(() => {
		const allDiceCheck = numbers.every(number => number.isheld)

		const diceValue = checkForTenzies(numbers)

		allDiceCheck & diceValue ? console.log('you won') : setTenzies(false)
	}, [numbers])

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
	// jak klikam na jakis number i ma on isheld na true i potem klikne roll to on zostaje, nie odswieza sie
	function handleAllNewDice() {
		setNumbers(prevNum => prevNum.map(num => (num.isHeld ? num : { ...num, value: Math.floor(Math.random() * 6) + 1 })))
	}

	// jak klikniemy na number to on ma wtedy isheld: true, jak klikniemy ponownie to ta wartosc flipuje sie na false, jest to taki jak by  "wlacznik swiatla"
	function holdDice(id) {
		setNumbers(prevNumbers =>
			prevNumbers.map(number => (number.id === id ? { ...number, isHeld: !number.isHeld } : number))
		)
	}

	const diceComponents = numbers.map(number => (
		<Die key={number.id} value={number.value.toString()} isHeld={number.isHeld} id={number.id} holdDice={holdDice} />
	))

	return (
		<main>
			<h1 className="title">Tenzies</h1>
			<p className="instructions">
				Roll until all dice are the same. Click each die to freeze it at its current value between rolls.
			</p>

			<div className="container">{diceComponents}</div>

			<button onClick={handleAllNewDice} className="roll">
				Roll
			</button>
		</main>
	)
}
