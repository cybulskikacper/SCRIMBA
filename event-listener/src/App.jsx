import { useState } from 'react'
import './App.css'

function App() {
	const [isImportant, setIsImportant] = useState('Yes')

	function handleClick() {
		setIsImportant('No')
	}

	return (
		<div className="state">
			<h1 className="state--title">Is state important to know?</h1>
			<div onClick={handleClick} className="state--value">
				<h1>{isImportant}</h1>
			</div>
		</div>
	)
}

export default App
