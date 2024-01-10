import React from 'react'

import './index.css'

function App() {
	const handleTitleClick = () => {
		window.location.reload()
	}

	return (
		<div className="container">
			<h1 className="title" onClick={handleTitleClick}>
				React Movie Search
			</h1>
		</div>
	)
}

export default App
