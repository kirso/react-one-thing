//component imports
import CustomButton from './CustomButton'

const OneThing = ({ thing, handleCompletedThing }) => {
	return (
		<>
			<h1 className='text-3xl sm:text-6xl font-bold text-center'>{thing}</h1>
			<CustomButton
				className='text-xl'
				text='Mark Done'
				handleCompletedThing={handleCompletedThing}
			/>
		</>
	)
}

export default OneThing
