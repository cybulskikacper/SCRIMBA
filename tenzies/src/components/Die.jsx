import React from 'react'

export default function Die(props) {
	return (
		<div className="num-container">
			<h2 className="number">{props.value}</h2>
		</div>
	)
}
