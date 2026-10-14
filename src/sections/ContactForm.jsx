import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight, Send, X } from 'lucide-react'

const contactEmail = 'rajputankit26548@gmail.com'

function ContactForm() {
    const [status, setStatus] = useState('')
    const [isOpen, setIsOpen] = useState(false)
    const dialogRef = useRef(null)

    useEffect(() => {
        if (!isOpen || !dialogRef.current || dialogRef.current.open) return
        dialogRef.current.showModal()
        dialogRef.current.querySelector('input')?.focus({ preventScroll: true })
    }, [isOpen])

    function handleSubmit(event) {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const name = formData.get('name').trim()
        const email = formData.get('email').trim()
        const company = formData.get('company').trim()
        const projectType = formData.get('projectType')
        const message = formData.get('message').trim()
        const subject = `Project enquiry from ${name}`
        const body = [
            `Name: ${name}`,
            `Email: ${email}`,
            company ? `Company: ${company}` : '',
            `Project type: ${projectType}`,
            '',
            message,
        ].filter(Boolean).join('\n')

        setStatus('Your email app should open with a ready-to-send draft.')
        window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    }

    return (
        <section className="contact-section" id="contact" aria-labelledby="contact-title">
            <div className="contact-copy">
                <p className="eyebrow">Have a product in mind?</p>
                <h2 id="contact-title">Let’s make<br />something <span>matter.</span></h2>
                <p className="contact-note">Tell me what you’re building. A few details are enough to get us started.</p>
                <a className="contact-email" href={`mailto:${contactEmail}`}>{contactEmail}<ArrowUpRight aria-hidden="true" /></a>
            </div>

            <div className="contact-invitation">
                <span className="contact-index">01 / Let’s talk</span>
                <p>Have a project in mind? Tell me a little about it and I’ll get back to you.</p>
                <button className="contact-open-button" type="button" onClick={() => setIsOpen(true)}>
                    Start a conversation <ArrowUpRight aria-hidden="true" />
                </button>
            </div>

            <dialog
                className="contact-dialog"
                ref={dialogRef}
                onClose={() => setIsOpen(false)}
                aria-labelledby="contact-dialog-title"
            >
                <div className="contact-dialog-inner">
                    <div className="contact-dialog-heading">
                        <div>
                            <p className="eyebrow">A good place to start</p>
                            <h2 id="contact-dialog-title">Tell me what<br />you have in <span>mind.</span></h2>
                        </div>
                        <button className="contact-dialog-close" type="button" onClick={() => dialogRef.current?.close()} aria-label="Close contact form">
                            <X aria-hidden="true" />
                        </button>
                    </div>
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-row">
                            <label>
                                <span>Your name</span>
                                <input autoComplete="name" name="name" placeholder="Jane Smith" required />
                            </label>
                            <label>
                                <span>Email address</span>
                                <input autoComplete="email" name="email" type="email" placeholder="jane@company.com" required />
                            </label>
                        </div>
                        <div className="form-row">
                            <label>
                                <span>Company <small>Optional</small></span>
                                <input autoComplete="organization" name="company" placeholder="Your team or company" />
                            </label>
                            <label>
                                <span>What do you need?</span>
                                <select name="projectType" defaultValue="" required>
                                    <option value="" disabled>Select a project type</option>
                                    <option>Website or web app</option>
                                    <option>API or backend</option>
                                    <option>Product engineering</option>
                                    <option>Something else</option>
                                </select>
                            </label>
                        </div>
                        <label className="message-field">
                            <span>A little about the project</span>
                            <textarea name="message" placeholder="The idea, the challenge, or where you need a hand..." rows="3" required />
                        </label>
                        <div className="form-footer">
                            <p aria-live="polite">{status || 'Your email app opens with a draft. Nothing is sent without your approval.'}</p>
                            <button className="contact-submit" type="submit">Send enquiry <Send aria-hidden="true" /></button>
                        </div>
                    </form>
                </div>
            </dialog>
        </section>
    )
}

export default ContactForm