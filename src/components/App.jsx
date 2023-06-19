import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/App.css'
import Container from 'react-bootstrap/Container'
import MarkdownEditor from './MarkdownEditor'
import MarkdownCheatSheet from './MarkdownCheatSheet'
import { ThemeContext } from '../contexts/ThemeContext'

function App() {
	const [colClass, setColClass] = useState('col-md-6')

	return (
		<ThemeContext.Provider value={{ colClass, setColClass }}>
			<Container className='my-5'>
				<div className='text-center'>
					<h1 className='fw-bold'>PreMarkable</h1>
					<p className='m-4'>
						PreMarkable helps you understand Markdown syntax by providing a live
						preview of your Markdown code.. for free!
					</p>
				</div>

				<MarkdownEditor />

				<MarkdownCheatSheet />

				<footer className='m-5'>
					<h5 className='text-center'>
						Made with ❤️ by <a href='https://seangil.com'>Sean Gil</a>
					</h5>
				</footer>
			</Container>
		</ThemeContext.Provider>
	)
}

export default App
