import React, { useEffect, useState } from 'react'
import emailjs from '@emailjs/browser'

const ContactUs = ({ alert, showAlert, hideAlert }) => {

  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [loading, setLoading] = useState(false);


  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }
  const HandleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        to_name: "Yaman Goyal",
        from_email: form.email,
        to_email: "ByteWiizard@gmail.com",
        message: form.message,
      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    ).then(() => {
      setLoading(false);

      showAlert({ show: true, text: 'Message Sent Suucessfully!', type: 'success' })
      setTimeout(() => {
        setForm({ name: '', email: '', message: '' })
      }, [3000])

      setTimeout(() => {
        hideAlert();
      }, [3000])

      setForm({ name: '', email: '', message: '' });
      // TODO show success message
      // TODO Hide an alert
    }).catch((err) => {
      console.log(err);
      setLoading(false);
      showAlert({ show: true, text: `I ${`didn't`} receive your message please try again in some time`, type: 'danger' })
      setTimeout(() => {
        hideAlert();
      }, [3000])

      setTimeout(() => {
        setForm({ name: '', email: '', message: '' })
      }, [3000])

    })

  }


  return (
    <div className='flex flex-row justify-center md:justify-between md:flex-col '>

      <section>

      </section>
      <section className='relative flex lg:flex-row flex-col md:w-2/6 mx-10'>



        <div className='flex-1 min-w-[50%] flex flex-col'>
          <h1 className='text-5xl font-bold leading-snug font-poppins'>Get in touch</h1>

          <form
            onSubmit={HandleSubmit}
            className='w-full flex flex-col gap-7 mt-14'
          >
            <label className='text-black font-semibold '>Name</label>
            <input
              type='text'
              name='name'
              className='bg-white border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mt-2.5 font-normal'
              placeholder='Your Full Name'
              value={form.name}
              onChange={handleChange}

            />

            <label className='text-black font-semibold '>Email</label>
            <input
              type='email'
              name='email'
              className='bg-white border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mt-2.5 font-normal'
              placeholder='Enter email address'
              value={form.email}
              onChange={handleChange}

            />

            <label className='text-black font-semibold '>Message</label>
            <textarea
              name='message'
              rows='4'
              className='block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-200 focus:ring-blue-500 focus:border-blue-500 mt-2.5 font-normal'
              placeholder='Message'
              value={form.message}
              onChange={handleChange}

            />

            <button
              type='submit'
              className='text-white font-semibold  hover:opacity-95  border-2 border-black bg-gradient-to-r from-[#b4a058] to-[#000000] focus:ring-4 focus:outline-none focus:ring-blue-300  rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center'
              disabled={loading}
            >
              {loading ? 'Sending' : ' Send Message'}
            </button>
          </form>
        </div>
      </section>
    </div>
  )

}

export default ContactUs