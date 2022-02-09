import React from 'react'
import {useForm, ValidationError} from '@formspree/react'

function ContactForm() {
    const [state, handleSubmit] = useForm('xknyjrbv')

    const message = null

    if(state.succeeded == true) {
        message = (
            <div>
                Email Submitted
            </div>
        )
    }

    return (
        <form onSubmit={handleSubmit} class="contact-form">
            {message}

            <span>Email</span>
            <input
                type="email"
                name="email"
                placeholder="user@gmail.com"
                required
            />
            <span>Name</span>
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
            <span>Message</span>
            <textarea
                id="message"
                name="message"
                placeholder="inquiry"
                required
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