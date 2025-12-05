import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Button } from '../ui/Button'
import { Input } from '../ui/Input'
import { Textarea } from '../ui/Textarea'
import { Send } from 'lucide-react'

export const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('')
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.4 })

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    setStatus('Sending...')

    // Simulated submission — replace with EmailJS or API call
    setTimeout(() => {
      console.log('Form Submitted:', formData)
      setStatus('Message Sent! I will be in touch soon.')
      setFormData({ name: '', email: '', message: '' })
    }, 1500)
  }

  return (
    <section
      ref={ref}
      id="contact"
      className="py-[var(--spacing-section)] px-6 grid-bg bg-[var(--color-bg-primary)]"
    >
      <div className="max-w-3xl mx-auto">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
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
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
          onSubmit={handleSubmit}
          className="space-y-6 p-8 rounded-xl border border-[var(--color-border-light)] bg-[var(--color-bg-secondary)]/60 shadow-soft"
        >
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-[var(--color-text-muted)] mb-1"
            >
              Name
            </label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-[var(--color-text-muted)] mb-1"
            >
              Email
            </label>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-[var(--color-text-muted)] mb-1"
            >
              Project Brief
            </label>
            <Textarea
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={status === 'Sending...'}
            className="w-full flex items-center justify-center gap-2"
          >
            {status === 'Sending...' ? 'Building...' : 'Send Message'}
            <Send className="w-4 h-4" />
          </Button>

          {/* Status Message */}
          {status && status !== 'Sending...' && (
            <p className="text-center accent-text mt-4 font-medium">
              {status}
            </p>
          )}
        </motion.form>
      </div>
    </section>
  )
}
