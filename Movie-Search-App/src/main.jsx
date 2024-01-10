import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import SearchMovies from './components/SearchMovies.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<App />
    <SearchMovies />
	</React.StrictMode>
)
