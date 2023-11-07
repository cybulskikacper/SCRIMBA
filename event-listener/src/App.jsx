import { useState } from 'react'
import './App.css'

function ContactCard(props) {

	
	return (
		<main>
			<article className="card">
				<img src="./images/user.png" className="card--image" />
				<div className="card--info">
					<img src={`../images/star-empty.png`} className="card--favorite" onClick={toggleFavorite} />
					<h2 className="card--name">
						{props.firstName} {props.lastName}
					</h2>
					<p className="card--contact">{props.phone}</p>
					<p className="card--contact">{props.email}</p>
				</div>
			</article>
		</main>
	)
}

function App() {
	const [contact, setContact] = useState({
		firstName: 'John',
		lastName: 'Doe',
		phone: '+1 (719) 555-1212',
		email: 'itsmyrealname@example.com',
		isFavorite: false,
	})

	function toggleFavorite() {
		console.log('Toggle Favorite')
	}

	return (
		<ContactCard
			firstName={contact.firstName}
			lastName={contact.lastName}
			phone={contact.phone}
			email={contact.email}
			toggleFavorite={toggleFavorite}
		/>
	)
}

export default App
