import React from 'react'

export default function Die(props) {
	return (
		<div className='die-value'>
			<h2 className='die-num'>{props.value}</h2>
		</div>
	)
}
