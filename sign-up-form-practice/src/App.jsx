import { useState } from 'react'
import { useId } from 'react'
import './index.css'

function App() {
	const [formData, setFormData] = useState({
		email: '',
		password: '',
		passwordConfirm: '',
		newsletter: true,
	})

	const id = useId()

	function handleChange(event) {
		const { name, value, type, checked } = event.target

		setFormData(prevFormData => {
			return {
				...prevFormData,
				[name]: type === 'checkbox' ? checked : value,
			}
		})
	}

	function handleSubmit(event) {
		event.preventDefault()
		if (formData.password === formData.passwordConfirm) {
			console.log('Successfully signed up')
		} else {
			console.log('Passwords do not match')
			return
		}

		if (formData.newsletter) {
			console.log('Thanks for signing up for our newsletter!')
		}
	}

	return (
		<>
			<div className="form-container">
				<form className="form" onSubmit={handleSubmit}>
					<input
						type="email"
						placeholder="Email address"
						className="form--input"
						name="email"
						value={formData.email}
						onChange={handleChange}
					/>
					<input
						type="password"
						placeholder="Password"
						className="form--input"
						name="password"
						value={formData.password}
						onChange={handleChange}
					/>
					<input
						type="password"
						placeholder="Confirm password"
						className="form--input"
						name="passwordConfirm"
						value={formData.passwordConfirm}
						onChange={handleChange}
					/>

					<div className="form--marketing">
						<input
							id={id + 'newsletter'}
							type="checkbox"
							name="newsletter"
							checked={formData.newsletter}
							onChange={handleChange}
						/>

						<label htmlFor="okayToEmail">I want to join the newsletter</label>
					</div>
					<button className="form--submit">Sign up</button>
				</form>
			</div>
		</>
	)
}

export default App
