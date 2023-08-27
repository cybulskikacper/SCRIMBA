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
function MainContent() {
	return (
		<div className="reasons">
			<h1 className="header">Reasons why I'm excited to learn React</h1>
			<ol>
				<li>I want to learn new skill</li>
				<li> I want to get hired as a developer</li>
				<li> To make all video editors jealous that people who know how to code in React can easily make $100 000 per year or even more while all these little video editors are editing some dumb shitty TikTok videos for $7.</li>
			</ol>
		</div>
	)
}

function Footer() {
	return (
		<footer className="footer">
			<p> © 2023 Cybulski development. All rights reserved.</p>
		</footer>
	)
}

export { Page, Header }
