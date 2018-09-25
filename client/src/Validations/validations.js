export function ValidationUserInput(fields,page) {
    if (fields.email === '' || (fields.email !== '' && !validateEmail(fields.email))) {
        alert('Please enter a valid email address', 'danger');
        return false;
    }
    if ((page === 'signup' && (fields.password === '' || fields.repeatPassword === '') )|| (page === 'login' && fields.password === '' ) ) {
        alert('Please enter the password fields', 'danger');
        return false;
    }
    if (page === 'signup' && ( (fields.password !== '' || fields.repeatPassword !== '') && (fields.password.length < 8 || fields.password.length < 8))) {
        alert('Password should be greater than or equal to 8 characters', 'danger');
        return false;
    }
    if (page === 'signup' &&( (fields.password !== '' || fields.repeatPassword !== '') && (fields.password !== fields.repeatPassword))) {
        alert('Passwords do not match', 'danger');
        return false;
    }
    return true;
}

export function validateEmail(value) {
    // regex from http://stackoverflow.com/questions/46155/validate-email-address-in-javascript
    // eslint-disable-next-line 
    let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(value);
}