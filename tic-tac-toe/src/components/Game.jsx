import React from 'react'
import { useState } from 'react'
import calculateWinner from '/helper'

import Board from './Board'
import { render } from 'react-dom'

const Game = () => {
	const [board, setBoard] = useState(Array(9).fill(null))
	const [xIsNext, setXIsNext] = useState(true)

	const winner = calculateWinner(board)

	const handleClick = i => {
		const boardCopy = [...board]

		//  if user click on a occupied square or if game is won, return

		if (winner || boardCopy[i]) return

		//  Put an X or an 0 in the clicked square

		boardCopy[i] = xIsNext ? 'X' : 'O'
		setBoard(boardCopy)
		setXIsNext(!xIsNext)
	}

	const jumpTo = () => {}

	const renderMoves = () => {
		return <button onClick={() => setBoard()}> </button>
	}

	return (
		<>
			<Board squares={board} onClick={handleClick} />
			<div className="styles">
				<p>{winner ? 'Winner: ' + winner : 'Next player' + (xIsNext ? 'X' : 'O')}</p>
				{renderMoves}
			</div>
		</>
	)
}

export default Game
