import { useState, useEffect } from 'react'
import WindowTracker from '/WindowTracker.jsx'

import './App.css'

function App() {
	const [show, setShow] = useState(true)

	const toggleShow = () => {
		setShow(prevShow => !prevShow)
	}

	return (
		<div className="container">

			<button onClick={toggleShow}>Toggle WindowTracker</button>

			{show && <WindowTracker />}
			
		</div>
	)
}

export default App
