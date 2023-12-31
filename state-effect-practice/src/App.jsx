import { useState, useEffect } from 'react'
import WindowTracker from '/WindowTracker.jsx'

import './App.css'

function App() {
	/**
	 * Challenge:
	 * 1. Create state called `show`, default to `true`
	 * 2. When the button is clicked, toggle `show`
	 * 3. Only display `<WindowTracker>` if `show` is `true`
	 */

	return (
		<div className="container">
			<button>Toggle WindowTracker</button>
			<WindowTracker />
		</div>
	)
}

export default App
