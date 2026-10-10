import { useRef, useState } from 'react'
import { ArrowUpRight, Check, Copy, Send } from 'lucide-react'
import { Button } from '../ui/Button'
import { Input } from '../ui/Input'
import { Textarea } from '../ui/Textarea'
import { Reveal } from '../shared/Reveal'

const linkedin = 'https://www.linkedin.com/in/ozioma-okafor-111006329/'
const contactEmail = import.meta.env.VITE_CONTACT_EMAIL?.trim()
const emailConfigured = Boolean(import.meta.env.VITE_EMAILJS_SERVICE_ID && import.meta.env.VITE_EMAILJS_TEMPLATE_ID && import.meta.env.VITE_EMAILJS_PUBLIC_KEY)

export function Contact() {
  const [status, setStatus] = useState('')
  const [sending, setSending] = useState(false)
  const [copied, setCopied] = useState(false)
  const formRef = useRef(null)
  const requestInFlight = useRef(false)

  const getBrief = () => {
    const values = new FormData(formRef.current)
    return `Hello Ozioma,\n\n${String(values.get('message')).trim()}\n\nFrom: ${String(values.get('user_name')).trim()}\nEmail: ${String(values.get('user_email')).trim()}`
  }

  const copyBrief = async () => {
    if (!formRef.current.reportValidity()) return
    try {
      await navigator.clipboard.writeText(getBrief())
      setCopied(true)
      setStatus('Brief copied. Paste it into a LinkedIn message to start the conversation. Nothing has been sent yet.')
    } catch {
      setStatus('Your browser could not copy the brief. You can select the text in the form and send it through LinkedIn instead.')
    }
  }

  const handleSubmit = async event => {
    event.preventDefault()
    if (requestInFlight.current) return
    if (!emailConfigured) {
      if (contactEmail) {
        window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent('Project inquiry from portfolio')}&body=${encodeURIComponent(getBrief())}`
        setStatus('Your email app will open with the brief. Review and send it there.')
      } else {
        await copyBrief()
      }
      return
    }
    requestInFlight.current = true
    setSending(true)
    setStatus('Sending your message…')
    try {
      const { default: emailjs } = await import('@emailjs/browser')
      await emailjs.sendForm(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, formRef.current, { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY })
      setStatus('Message sent. Thank you for getting in touch.')
      formRef.current.reset()
    } catch {
      setStatus('The message could not be sent. Your brief is still here. Try again or contact me directly on LinkedIn.')
    } finally {
      requestInFlight.current = false
      setSending(false)
    }
  }

  return (
    <section tabIndex={-1} id="contact" className="contact" aria-labelledby="contact-title">
      <div className="page-container contact-layout">
        <Reveal>
          <p className="eyebrow text-muted">04 / Start a conversation</p>
          <h2 id="contact-title" className="section-heading">Have something<br /><span className="serif">in mind?</span></h2>
          <p className="contact-copy">A website for your business, an interface for your product, or a frontend role on your team. Tell me what you’re working on and where I can help.</p>
          <div className="contact-links">
            <a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-link">LinkedIn <ArrowUpRight aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span></a>
            {contactEmail && <a href={`mailto:${contactEmail}`} className="text-link">Email me <ArrowUpRight aria-hidden="true" /></a>}
          </div>
        </Reveal>
        <Reveal as="form" ref={formRef} onSubmit={handleSubmit} className="contact-form" delay={0.15} aria-label="Project inquiry" aria-busy={sending}
          onChange={() => { if (copied) setCopied(false) }}>
          <div className="field"><label htmlFor="contact-name">Your name</label><Input id="contact-name" name="user_name" autoComplete="name" placeholder="How should I address you?" maxLength={120} readOnly={sending} required /></div>
          <div className="field"><label htmlFor="contact-email">Your email</label><Input id="contact-email" type="email" name="user_email" autoComplete="email" placeholder="you@example.com" maxLength={254} readOnly={sending} required /></div>
          <div className="field"><label htmlFor="contact-message">What are you working on?</label><Textarea id="contact-message" name="message" rows={4} placeholder="A little about your project, needs, or opportunity…" maxLength={5000} readOnly={sending} required /></div>
          <div className="form-actions">
            <Button type="submit" disabled={sending}>
              {emailConfigured ? (sending ? 'Sending…' : 'Send inquiry') : contactEmail ? 'Open email draft' : copied ? 'Brief copied' : 'Copy your brief'}
              {emailConfigured ? <Send aria-hidden="true" /> : copied ? <Check aria-hidden="true" /> : <Copy aria-hidden="true" />}
            </Button>
          </div>
          <p className="form-note">{emailConfigured ? 'Your details are used to respond to your inquiry.' : contactEmail ? 'This opens a draft in your email app. You choose when to send it.' : 'Write your brief, copy it, and send it to me on LinkedIn.'}</p>
          <p className="form-status" role="status" aria-live="polite" hidden={!status}>{status}</p>
        </Reveal>
      </div>
    </section>
  )
}
