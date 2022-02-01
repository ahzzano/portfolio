import React from 'react'
import {useForm, ValidationError} from '@formspree/react'

function ContactForm() {
    const [state, handleSubmit] = useForm('xknyjrbv')

    return (
        <form onSubmit={handleSubmit} class="contact-form">
            <input
                type="email"
                name="email"
                placeholder="user@gmail.com"
            />
            <input
                type="name"
                name="name"
                placeholder="gregory fitzgerald"
            />
            <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
            />
            <textarea
                id="message"
                name="message"
                placeholder="inquiry"
            />
            <ValidationError 
                prefix="Message" 
                field="message"
                errors={state.errors}
            />
            <button type="submit" disabled={state.submitting}>
                Submit
            </button>
        </form>
    )
}

export default ContactForm