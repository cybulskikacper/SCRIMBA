import Die from './components/Die'

import './index.css'

/**
 * Challenge:
 *
 * Write a function (allNewDice) that returns an array
 * of 10 random numbers between 1-6 inclusive.
 *
 * Log the array of numbers to the console for now
 */

function App() {
	function allNewDice() {
		const diceArray = []

		for (let i = 0; i< 10; i++) {
			const randomNumber = Math.floor(Math.random() * 6) + 1
			diceArray.push(randomNumber)
		}

		return diceArray
	}
	console.log(allNewDice())

	return (
		<>
			<main>
				<div className="container">
					<Die value="1" />
					<Die value="2" />
					<Die value="3" />
					<Die value="4" />
					<Die value="5" />
					<Die value="6" />
					<Die value="1" />
					<Die value="1" />
					<Die value="1" />
					<Die value="1" />
				</div>
			</main>
		</>
	)
}

export default App
