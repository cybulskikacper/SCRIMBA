import { useState } from 'react'
import Boxes from './Boxes'
import './App.css'

function App(props) {
	const [squares, setSquares] = useState(Boxes)

	const styles = {
		backgroundColor: props.darkMode ? '#222222' : '#cccccc',
	}

	// Challenge: use a ternary to determine the backgroundColor.
	// If darkMode is true, set it to #222222
	// If darkMode is false, set it to #cccccc

	const squareElements = squares.map(square => <div style={styles} className="box" key={square.id}></div>)

	return (
		<main>
			<h1> {squareElements}</h1>
		</main>
	)
}

export default App
