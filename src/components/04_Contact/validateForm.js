import isEmail from 'validator/lib/isEmail'

export const validateForm = formData => {
    const { user_name, user_email, message } = formData
    const errors = {}
    let validForm = true

    if (user_name === '') {
        errors.user_name = 'Please enter a name'
        validForm = false
    }
    if (!isEmail(user_email)) {
        errors.user_email = 'Please enter a valid email'
        validForm = false
    }
    if (message === '') {
        errors.message = 'Please enter a message'
        validForm = false
    }

    return { errors, validForm }
}
