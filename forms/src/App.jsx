import { useState } from 'react'
import { useId } from 'react'

import './App.css'

function App() {
	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		email: '',
		comments: '',
		isFriendly: true,
		employment: '',
		favColor: '',
	})

	const id = useId()

	function handleChange(event) {
		const { name, value, type, checked } = event.target

		setFormData(prevformData => {
			return {
				...prevformData,
				[name]: type === 'checkbox' ? checked : value,
			}
		})
	}

	function handleSubmit(event) {
		event.preventDefault()
	}

	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor="">First Name</label>
			<input type="text" onChange={handleChange} name="firstName" value={formData.firstName} />

			<label>Last Name</label>
			<input type="text" onChange={handleChange} name="lastName" value={formData.lastName} />
			<label>Email</label>
			<input type="text" onChange={handleChange} name="email" value={formData.email} />

			<textarea placeholder="Comments" onChange={handleChange} name="comments" value={formData.comments} />

			<input type="checkbox" id="isFriendly" checked={formData.isFriendly} name="isFriendly" onChange={handleChange} />

			<label htmlFor="isFriendly">Are you friendly?</label>

			<br />
			<br />

			<fieldset>
				<legend>Current employment status</legend>

				<input type="radio" id="unemployed" name="employment" value="unemployed" checked={formData.employment === 'unemployed'} onChange={handleChange} />
				<label htmlFor="unemployed">Unemployed </label>
				<br />

				<input type="radio" id="part-time" name="employment" value="part-time" checked={formData.employment === 'part-time'} onChange={handleChange} />
				<label htmlFor="part-time">Part-time </label>
				<br />

				<input type="radio" id="full-time" name="employment" value="full-time" checked={formData.employment === 'full-time'} onChange={handleChange} />
				<label htmlFor="full-time">Full-time </label>
				<br />
			</fieldset>

			<br />

			<label htmlFor="favColor">What is your favorite color?</label>
			<br />
			<select id="favColor" value={formData.favColor} onChange={handleChange} name="favColor">
				<option value="">-- Choose --</option>
				<option value="red">Red</option>
				<option value="orange">Orange</option>
				<option value="yellow">Yellow</option>
				<option value="green">Green</option>
				<option value="blue">Blue</option>
				<option value="indigo">Indigo</option>
				<option value="violet">Violet</option>
			</select>

			<br />
			<br />

			<button>Submit</button>
		</form>
	)
}
export default App
