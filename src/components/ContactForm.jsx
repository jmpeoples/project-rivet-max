import { toast } from 'react-toastify'
import { useState } from 'react'
import mixpanel from 'mixpanel-browser'

// Replace YOUR_TOKEN with your Project Token
mixpanel.init('0a55d25bf146ec68aee0b221ce8fb227', { debug: true })

// Track an event. It can be anything, but in this example, we're tracking a Signed Up event.
// Include a property about the signup, like the Signup Type

export const ContactForm = () => {
  const [isDisabled, setIsDisabled] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = new FormData(e.target)

    const formData = {}

    for (let [key, value] of form) {
      formData[key] = value
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        // Hide your form
        toast('Welcome to Erleana', {
          hideProgressBar: true,
          autoClose: 2000,
          type: 'success',
        })
        mixpanel.identify(formData.email)
        setIsDisabled(true)
      } else {
        console.error(response)
        console.log(formData)
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div id="News" className="bg-gray-900 py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Want game dev update?
        </h2>
        <p className="mt-4 text-yellow-500">Join our Discord</p>
        <div className="mt-8">
          <a
            href="https://discord.com/channels/1102078773190471750/1104959850456297522"
            className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-lg font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
          >
            Join Us
          </a>
        </div>
      </div>
    </div>
  )
}
