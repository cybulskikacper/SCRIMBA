import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Header() {
	return (
		<header>
			<nav className="nav">
				<img src="./src/assets/react.svg" alt="React logo" className="nav-logo" />

				<ul className="nav-items">
					<li>Pricing</li>
					<li>About</li>
					<li>Contact</li>
				</ul>
			</nav>
		</header>
	)
}

function Page() {
	return (
		<>
			<Header />
			<MainContent />
			<Footer />
		</>
	)
}

function Footer() {
	return (
		<footer>
			<p> © 2023 Cybulski development. All rights reserved.</p>
		</footer>
	)
}

function MainContent() {
	return (
		<>
			<h1>Reasons why I'm excited to learn React</h1>
			<ol>
				<li>I want to learn new skill</li>
				<li> I want to get hired as a developer</li>
			</ol>
		</>
	)
}

export { Page, Header }
