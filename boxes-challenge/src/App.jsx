import { useState } from 'react'
import Boxes from './Boxes'
import Box from '../components/Box'
import './App.css'

function App(props) {
	const [squares, setSquares] = useState(Boxes)

	function toggle(id) {
		/**
		 * Challenge: use setSquares to update the
		 * correct square in the array.
		 *
		 * Make sure not to directly modify state!
		 *
		 * Hint: look back at the lesson on updating arrays
		 * in state if you need a reminder on how to do this
		 */

		setSquares(prevS)
	}

	const squareElements = squares.map(square => <Box key={square.id} id={square.id} on={square.on} toggle={toggle} />)

	return (
		<main>
			<h1> {squareElements}</h1>
		</main>
	)
}

export default App
