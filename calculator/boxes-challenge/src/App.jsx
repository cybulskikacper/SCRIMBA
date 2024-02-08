import { useState } from 'react'
import Boxes from './Boxes'
import Box from '../components/Box'
import './App.css'

function App(props) {
	const [squares, setSquares] = useState(Boxes)

	/**
	 * Challenge: use setSquares to update the
	 * correct square in the array.
	 * Make sure not to directly modify state!
	 */

	function toggle(id) {
		setSquares(prevSquare => {
			return prevSquare.map(square => {
				return square.id === id ? { ...square, on: !square.on } : square
			})
		})
	}

	const squareElements = squares.map(square => (
		<Box key={square.id} on={square.on} toggle={() => toggle(square.id)} />
	))

	return (
		<main>
			<h1> {squareElements}</h1>
		</main>
	)
}

export default App
