import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import emailjs from '@emailjs/browser'

import { Button } from '../ui/Button'
import { Input } from '../ui/Input'
import { Textarea } from '../ui/Textarea'
import { Send } from 'lucide-react'

export const Contact = () => {
  const [status, setStatus] = useState('')
  const formRef = useRef(null)
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.4 })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )

      setStatus('Message Sent! I will be in touch soon.')
      formRef.current.reset()
    } catch (error) {
      console.error(error)
      setStatus('Something went wrong. Please try again.')
    }
  }

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-[var(--spacing-section)] px-6 grid-bg bg-[var(--color-bg-primary)]"
    >
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-2 text-white">
            <span className="accent-text">/</span> Contact
          </h2>
          <p className="text-lg text-[var(--color-text-muted)]">
            Ready to start something meaningful? Let’s talk architecture.
          </p>
        </motion.div>

        {/* Form */}
        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
          className="
            space-y-6 p-8 rounded-xl
            border border-[var(--color-border-light)]
            bg-[var(--color-bg-secondary)]/60 shadow-soft
          "
        >
          <div>
            <label className="block text-sm font-medium text-[var(--color-text-muted)] mb-1">
              Name
            </label>
            <Input name="user_name" required />
          </div>

          <div>
            <label className="block text-sm font-medium text-[var(--color-text-muted)] mb-1">
              Email
            </label>
            <Input type="email" name="user_email" required />
          </div>

          <div>
            <label className="block text-sm font-medium text-[var(--color-text-muted)] mb-1">
              Project Brief
            </label>
            <Textarea name="message" rows="4" required />
          </div>

          <Button
            type="submit"
            disabled={status === 'Sending...'}
            className="w-full flex items-center justify-center gap-2"
          >
            {status === 'Sending...' ? 'Sending...' : 'Send Message'}
            <Send className="w-4 h-4" />
          </Button>

          {status && (
            <p
              className={`
                text-center mt-4 text-sm font-medium
                ${status.includes('Sent')
                  ? 'accent-text'
                  : 'text-[var(--color-accent-red)]'}
              `}
            >
              {status}
            </p>
          )}
        </motion.form>
      </div>
    </section>
  )
}
