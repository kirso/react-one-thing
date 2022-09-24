import Form from './components/Form'
import OneThing from './components/OneThing'
import { useState } from 'react'

// libraries imports
import JSConfetti from 'js-confetti'
const jsConfetti = new JSConfetti()

function getSuccessMessage() {
	const message = ['Congrats', 'Well done!', 'Oki doke!', 'This looks good']

	return message[Math.floor(Math.random() * message.length)]
}

function App() {
	const [thing, setThing] = useState('')
	const [isCompleted, setIsCompleted] = useState(true)

	const handleSubmit = (e) => {
		e.preventDefault()
		setIsCompleted(false)
	}

	const handleInput = (e) => {
		setThing(e.target.value)
	}

	const handleCompletedThing = async (e) => {
		e.target.setAttribute('disabled', true)
		setThing(getSuccessMessage())
		await jsConfetti.addConfetti({
			emojis: ['🌈', '⚡️', '💥', '✨', '💫', '🍾'],
		})
		e.target.removeAttribute('disabled')
		setThing('')
		setIsCompleted(true)
	}
	return (
		<main className='grid place-items-center min-h-screen bg-gradient-to-b from-slate-100 to-slate-300 dark:from-slate-800 dark:to-slate-900 text-slate-900 dark:text-slate-200'>
			<div className='grid place-items-center gap-8 m-8'>
				<h1 className='text-3xl sm:text-6xl font-bold text-center'>
					What will you work on?
				</h1>
				{isCompleted && (
					<Form
						thing={thing}
						handleInput={handleInput}
						handleSubmit={handleSubmit}
					/>
				)}
				{!isCompleted && (
					<OneThing thing={thing} handleCompletedThing={handleCompletedThing} />
				)}
			</div>
		</main>
	)
}

export default App
