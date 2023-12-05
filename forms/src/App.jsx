import { useState } from 'react'
import './App.css'

function App() {
	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		email: '',
	})

	function handleChange(event) {
		console.log(formData)

		setFormData(prevformData => {
			return {
				...prevformData,
				[event.target.name]: event.target.value,
			}
		})
	}

	return (
		<form>
			<input type="text" placeholder="First Name" onChange={handleChange} name="firstName" />

			<input type="text" placeholder="Last Name" onChange={handleChange} name="lastName" />

			<input type="text" placeholder="Email" onChange={handleChange} name="email" />
		</form>
	)
}
export default App
