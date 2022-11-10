const sendEmail = async e => {
    e.preventDefault()

    try {
        const email = await emailjs.sendForm(
            process.env.REACT_APP_EMAILJS_SERVICE_ID,
            process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
            formRef.current,
            process.env.REACT_APP_EMAILJS_KEY
        )
        console.log(email.text)
        console.log('message sent')
    } catch (error) {
        console.log(error.text)
    }
}
