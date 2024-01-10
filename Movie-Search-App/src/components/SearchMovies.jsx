import React from 'react'
import { useState } from 'react'
import MovieCard from './MovieCard'

function SearchMovies() {
	// states input query, movies
	const [query, setQuery] = useState('')

	//create the state for movies, and update that state appropriat
	const [movies, setMovies] = useState([])

	const searchMovies = async event => {
		event.preventDefault()

		const apiKey = '80b87856ac261d5936c3ee6bd7311c12'

		const url = ` https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}&page=1&include_adult=false `

		try {
			const res = await fetch(url)
			const data = await res.json()
			setMovies(data.results)
		} catch (err) {
			console.error(err)
		}
	}

	return (
		<>
			<form className="form" onSubmit={searchMovies}>
				<label htmlFor="query" className="label">
					Movie name
				</label>
				<input
					className="input"
					type="text"
					name="query"
					placeholder="i.e. Jurassic Park"
					value={query}
					onChange={e => setQuery(e.target.value)}
					// zamiast e, moze byc cokolwiek
				/>

				<button className="button" type="submit">
					Search
				</button>
			</form>

			<div className="card-list">
				{movies
					.filter(movie => movie.poster_path)
					.map(movie => (
						<MovieCard movie={movie} key={movie.id} />
					))}
			</div>
		</>
	)
}

export default SearchMovies
