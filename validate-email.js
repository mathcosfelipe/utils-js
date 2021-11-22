function validateEmail(element) {
	errors = 0;
	var emailRegEx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
	if ($('#'+element).val().search(emailRegEx) == -1) {
		setInvalid(element);
		$('#'+element).prev('.error-msg').text('E-mail inválido');
		errors++;
	}
	return errors;
}
