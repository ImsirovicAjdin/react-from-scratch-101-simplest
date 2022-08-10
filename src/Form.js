function Form() {
	function handleSubmit(evt) {
		evt.preventDefault()
		console.log('Submit button clicked', evt)
	}
	
	return (
		<form onSubmit={handleSubmit}>
			<input type="submit" value="Submit" />
		</form>
	)
}

export default Form
