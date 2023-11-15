import React, { useState } from 'react'

import './App.css'

function App() {
	const [contact, setContact] = React.useState({
		firstName: 'John',
		lastName: 'Doe',
		phone: '+1 (719) 555-1212',
		email: 'itsmyrealname@example.com',
		isFavorite: false,
	})

	/* 
				rozsmarowanie tablicy obiektów, nasz prevContact "przejmuje" wszystkie wartosci z [contact,set contact] czyli wlasciwie rozsmarowanie wyglada w taki sposób: 

		firstName: 'John',
		lastName: 'Doe',
		phone: '+1 (719) 555-1212',
		email: 'itsmyrealname@example.com',
		isFavorite: false,

		dzieki takiemu zapisowi, wszystko co klikamy na stronie pozostaje takie same oprocz gwiazdki 
		
		a potem po przecinku, 
		Ogólnie rzecz biorąc, jeśli prevContact.isFavorite reprezentuje stan "ulubionego" poprzedniego kontaktu,
	 to isFavorite: !prevContact.isFavorite odwraca ten stan, oznaczając, że nowy kontakt 
	 (lub aktualizacja poprzedniego) będzie miała przeciwną wartość w właściwości isFavorite. Czyli zamiana z true na false 
		*/

	function toggleFavorite() {
		setContact(prevContact => {
			return {
				...prevContact,
				isFavorite: !prevContact.isFavorite,
			}
		})
	}

	let starIcon = contact.isFavorite ? 'star-filled.png' : 'star-empty.png'

	return (
		<main>
			<article className="card">
				<img src="./images/user.png" className="card--image" />
				<div className="card--info">
					<img src={`../images/${starIcon}`} className="card--favorite" onClick={toggleFavorite} />
					<h2 className="card--name">
						{contact.firstName} {contact.lastName}
					</h2>
					<p className="card--contact">{contact.phone}</p>
					<p className="card--contact">{contact.email}</p>
				</div>
			</article>
		</main>
	)
}

export default App
