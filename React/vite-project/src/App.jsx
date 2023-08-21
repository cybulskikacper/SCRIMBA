import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Header from './components/Header'
import viteLogo from '/vite.svg'
import './App.css'

const navbar = (
	<nav>
		<h1>Bob's Bistro</h1>
		<ul>
			<li>Menu</li>
			<li>About</li>
			<li>Contact</li>
		</ul>
	</nav>
)

ReactDOM.render(navbar, document.getElementById('root'))
