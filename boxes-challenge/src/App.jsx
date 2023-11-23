import { useState } from 'react'
import Boxes from './Boxes'
import Box from '../components/Box'
import './App.css'

function App(props) {
	const [squares, setSquares] = useState(Boxes)

	const styles = {
		backgroundColor: props.darkMode ? '#222222' : '#cccccc',
	}

	const squareElements = squares.map(square => 
	
	
	<Box key={square.id} on={square.on} 
	
	
	
	/>)

	return (
		<main>
			<h1> {squareElements}</h1>
		</main>
	)
}

export default App
