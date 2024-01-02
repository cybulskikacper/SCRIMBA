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
			<label htmlFor={id + '-firstName'}>First Name</label>
			<input type="text" onChange={handleChange} name="firstame" value={formData.firstName} id={id + '-firstName'} />

			<label htmlFor={id + '-lastName'}>Last Name</label>
			<input type="text" onChange={handleChange} name="lastName" value={formData.lastName} id={id + '-lastName'} />

			<label htmlFor={id + '-email'}>Email</label>
			<input type="text" onChange={handleChange} name="email" value={formData.email} id={id + '-email'} />

			<label htmlFor={id + '-comments'}>Comments</label>

			<textarea value={formData.comments} onChange={handleChange} name="comments" id={id + '-comments'} />

			<input
				type="checkbox"
				id={id + '-isFriendly'}
				checked={formData.isFriendly}
				name="isFriendly"
				onChange={handleChange}
			/>

			<label htmlFor={id + '-isFriendly'}>Are you friendly?</label>

			<br />
			<br />

			<fieldset>
				<legend>Current employment status</legend>

				<input
					type="radio"
					id={id + '-unemployed'}
					name="employment"
					value="unemployed"
					checked={formData.employment === 'unemployed'}
					onChange={handleChange}
				/>
				<label htmlFor={id + '-unemployed'}>Unemployed </label>
				<br />

				<input
					type="radio"
					id={id + '- part-time'}
					name="employment"
					value="part-time"
					checked={formData.employment === 'part-time'}
					onChange={handleChange}
				/>
				<label htmlFor={id + '-part-time'}>Part-time </label>
				<br />

				<input
					type="radio"
					id={id + 'full-time'}
					name="employment"
					value="full-time"
					checked={formData.employment === 'full-time'}
					onChange={handleChange}
				/>
				<label htmlFor={id + 'full-time'}>Full-time </label>
				<br />
			</fieldset>

			<br />

			<label htmlFor={id + '-favColor'}>What is your favorite color?</label>
			<br />
			<select id={id + '-favColor'} value={formData.favColor} onChange={handleChange} name="favColor">
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
