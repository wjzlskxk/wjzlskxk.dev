import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import config from '../../config/email.config'

const useContact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    title: '',
    message: '',
  })
  const formRef = useRef<HTMLFormElement>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [failed, setFailed] = useState<boolean | null>(null)

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    setIsSubmitting(true)

    console.log(formRef.current)

    emailjs
      .sendForm(
        config.service_id,
        config.template_id,
        formRef.current!,
        config.public_key
      )
      .then(() => {
        setTimeout(() => {
          setIsSubmitting(false)
          setSubmitted(true)
          setFailed(false)
          setFormData({ name: '', email: '', title: '', message: '' })

          setTimeout(() => setSubmitted(false), 3000)
        }, 1000)
      })
      .catch((error) => {
        setIsSubmitting(false)
        setFailed(true)
        console.log(error)
      })
  }

  return {
    formData,
    formRef,
    isSubmitting,
    submitted,
    failed,
    handleInputChange,
    handleSubmit,
  }
}

export default useContact
