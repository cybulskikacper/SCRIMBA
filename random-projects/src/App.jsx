import React from 'react'

import { useState } from 'react'

import './App.css'

/**
 * Challenge:
 * - If there are no unread messages, display "You're all caught up!"
 * - If there are > 0 unread messages, display "You have <n> unread
 *   message(s)"
 *      - If there's exactly 1 unread message, it should read "message"
 *        (singular)
 */

function App() {
	const [messages, setMessages] = useState(['a', 'b'])
	/**
	 * Challenge:
	 * - If there are no unread messages, display "You're all caught up!"
	 * - If there are > 0 unread messages, display "You have <n> unread
	 *   message(s)"
	 *      - If there's exactly 1 unread message, it should read "message"
	 *        (singular)
	 */
	return <div></div>
}

export default App
