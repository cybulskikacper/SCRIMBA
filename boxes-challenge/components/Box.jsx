import React from 'react'

function Box(props) {
	const styles = {
		backgroundColor: props.on ? '#222222' : 'none',
	}

	return <div className="box" style={styles}></div>
}

export default Box
