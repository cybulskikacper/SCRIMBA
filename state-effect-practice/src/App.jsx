import { useState, useEffect } from 'react'
import WindowTracker from '/WindowTracker.jsx'

import './App.css'

function App() {
	const [show, setShow] = useState(true)

	const toggleShow = () => {
		setShow(!show)
	}

	return (
		<div className="container">
			{/*  Only display `<WindowTracker>` if `show` is `true`
			 */}

			<button onClick={toggleShow}>Toggle WindowTracker</button>
			<WindowTracker />
		</div>
	)
}

export default App
