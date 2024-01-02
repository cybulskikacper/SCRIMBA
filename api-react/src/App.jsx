import { useState, useEffect } from 'react'

import './index.css'

function App() {
	const [starWarsData, setStarWarsData] = useState({})
	const [count, setCount] = useState(1)

	useEffect(() => {
		console.log('Effect ran')
		fetch(`https://swapi.dev/api/people/${count}`)
			.then(res => res.json())
			.then(data => setStarWarsData(data))
	}, [count])

	return (
		<div>
			<h2>The count is: {count}</h2>
			<pre>{JSON.stringify(starWarsData, null, 2)}</pre>
			<button onClick={() => setCount(prevCount => prevCount + 1)}>Get Next Character</button>
		</div>
	)
}

export default App
