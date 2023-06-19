import React, { useState, useContext, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/App.css'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import { Row } from 'react-bootstrap'
import Badge from 'react-bootstrap/Badge'
import { ThemeContext } from './../contexts/ThemeContext'
import MarkdownIt from 'markdown-it'

function MarkdownEditor() {
	const [inputMarkdown, setInputMarkdown] = useState('')
	const [outputHtml, setOutputHtml] = useState('')

	const { colClass, setColClass } = useContext(ThemeContext)

	const topDown = (isChecked) => {
		return isChecked ? setColClass(`col-12`) : setColClass(`col-6`)
	}

	useEffect(() => {
		const md = new MarkdownIt()
		const parsedValue = md.render(inputMarkdown)
		setOutputHtml(parsedValue)
	}, [inputMarkdown])

	return (
		<div>
			<Form className='d-flex justify-content-end gap-2 m-5'>
				<label htmlFor=''>top-down view</label>
				<Form.Check
					type='switch'
					id='custom-switch'
					onClick={(e) => topDown(e.target.checked)}
				/>
			</Form>
			<Row className='mb-5'>
				<Col className={`mb-4 ${colClass}`}>
					<Badge
						style={{ fontSize: 25 }}
						className='bg-success text-white active text-nowrap fw-bold mb-2'
					>
						Enter Markdown
					</Badge>

					<textarea
						value={inputMarkdown}
						onChange={(e) => setInputMarkdown(e.target.value)}
						className='markdown-editor form-control rounded-bottom '
					></textarea>
				</Col>
				<Col className={`mb-4 ${colClass}`}>
					<Badge
						style={{ fontSize: 25 }}
						className='bg-success text-white active text-nowrap fw-bold mb-2'
					>
						Preview
					</Badge>

					<div
						dangerouslySetInnerHTML={{ __html: outputHtml }}
						className='markdown-editor form-control rounded-bottom'
					></div>
				</Col>
			</Row>
		</div>
	)
}

export default MarkdownEditor
